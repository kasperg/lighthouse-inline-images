// ==UserScript==
// @name           Lighthouse Inline Image Attachments
// @namespace      headinsky.dk
// @description    Show image attachments for Lighthouse tickets inline
// @include        https://*.lighthouseapp.com/*
// @require		     http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

$(document).ready(function() {
  var width = $("#main .attachments").width();
  
  $(".attachment-list li.aimg a").each(function()
  {
      //replace link to image with actual image
      jQuery(this).html(
        jQuery('<img/>')
          .attr('src', $(this).attr('href'))
          .css('max-width', (width-45)+'px'));
      //readjust positioning of file size
      jQuery(this).siblings('.file-size').css({
         'top': 'auto',
         'bottom': '9px'
      });
  });
});