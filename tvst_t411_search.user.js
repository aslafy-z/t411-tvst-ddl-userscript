// ==UserScript==
// @name        TVShow Time - T411 search button
// @description Provide a "Search in T411" button in the "To watch" page
// @namespace   pillowdev.tvst-t411-search
// @include     http*://www.tvshowtime.com/*
// @version     0.2
// @grant       none
// @require     https://code.jquery.com/jquery-2.1.3.min.js
// ==/UserScript==

// Changelog:
// 24/09/2015	changed domain name from t411.io to t411.in

var t411_domain = 'www.t411.li'

var search_base_link = 'http://' + t411_domain + '/torrents/search/?search=';
var search_prefix = '';
var search_suffix = '';

this.jQuery = jQuery.noConflict(true);

jQuery(document).ready(function() {
  jQuery("<style type='text/css'> .download-link{display:inline;width:8px;height:8px;margin:0 auto;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAQAAAC1QeVaAAAAyElEQVQY02NggAA2+fi0/xCoEsmADuR8yJRklAuESSrHMjBCRVm47OcC4TyvfTBJn8N280Fi7EIMTJwaM2HCyFB7PosA0EBmGeWJ6FLqM1iUoIYzicm2JH6HSSR+V+xmkkJ2j6BkSfgzkFT4C5lqRlGYOCsDC5gWkswPvBf6RKYMKsUClNGr1shjEIRIS0TIJjJApATUMvWqGYB2fDWewiCK4msRg974j2n/GRQKgdJfPA977USCh0BSKpUMjDzSadj8KZ/PJAAAUPCAT2cQ2usAAAAASUVORK5CYII=') no-repeat 0 0} </style>").appendTo("head");

  jQuery('li[id*="episode-item-"]').each(function () {
    try {
      var newNode = jQuery(this).find("a.subs-btn:first").clone();
      var serie = jQuery(this).find("div.episode-details a.secondary-link").text();
      var episode = jQuery(this).find("div.episode-details h2 a").text();
      newNode.attr('href', search_base_link + search_prefix + ' ' + serie + ' ' + episode + ' ' + search_suffix);
      newNode.attr('target', '_blank');
      newNode.attr('data-original-title', 'Search on T411');
      newNode.removeClass().addClass('download-link');

      newNode.find('i').removeClass().html('&nbsp;&nbsp;');
      jQuery(this).find("a.subs-btn:first").before(newNode);
    } catch(e) {
      console.error(e);
    }
  });
});
