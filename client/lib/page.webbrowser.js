// Creative Commons License. (c) 2013 pentasyllabic.com
// Attribution + Noncommercial + NoDerivatives
// http://creativecommons.org/licenses/by-nc-nd/3.0/


Session.set('browser_window_location', 'http://www.wikipedia.org');

Template.webBrowserPageTemplate.browser_window_location = function(){
    return Session.get('browser_window_location');
};
Template.webBrowserPageTemplate.rendered = function(){
    $('#mainLayoutPane').css('height', window.innerHeight - 120);
};