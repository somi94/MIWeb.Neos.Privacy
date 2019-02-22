(function() {
    let textDefault = 'This website uses cookies to ensure you get the best experience on our website. <a href="https://cookiesandyou.com/" target="_blank">Learn more</a>'
    let buttonTextDefault = 'Got it!';
    let containerClass = 'miweb-neos-privacy-cookies';

    let container = document.getElementsByClassName(containerClass);
    container = container.length ? container[0] : null;

    function close() {
        if(!container) {
            return;
        }
        container.parentNode.removeChild(container);
    }

    function create() {
        if(container) {
            return;
        }

        container = document.createElement('div');
        container.className = containerClass;
        container.innerHTML = '<a class="btn cookies-accept">' + (miwebPrivacyCookiesTranslations.button || buttonTextDefault) + '</a><p>' + (miwebPrivacyCookiesTranslations.message || textDefault) + '</p>';

        document.getElementsByTagName('body')[0].appendChild(container);
    }

    function initialize(cookie_name, days) {
        cookie_name = cookie_name || 'MIWeb.Neos.Privacy.acceptCookies';
        days = days || 3650;

        if(document.cookie.indexOf(cookie_name + "=") >= 0) {
            close();
            return;
        }

        if(!container || !container.length) {
            create();
        }

        container.style.display = 'block';

        let cookiesAccept = container.getElementsByClassName('cookies-accept');
        if(cookiesAccept && cookiesAccept.length) {
            cookiesAccept[0].onclick = function() {
                let d = new Date();
                d.setTime(d.getTime() + (days*24*60*60*1000));
                document.cookie = cookie_name + "=1;expires=" + d.toUTCString() + ";path=/";
                close();
            };
        }

        let cookiesClose = container.getElementsByClassName('cookies-close');
        if(cookiesClose && cookiesClose.length) {
            cookiesClose[0].onclick = function() {
                close();
            };
        }
    }

    initialize();
})();