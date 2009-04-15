// ==UserScript==
// @name           Lighthouse Inline Image Attachments
// @namespace      headinsky.dk
// @description    Show image attachments for Lighthouse tickets inline
// @include        https://*.lighthouseapp.com/*
// ==/UserScript==

var attachments;
attachments = document.getElementsByClassName('aimg');
for each(attachment in attachments)
{
  links = attachment.getElementsByTagName('a');
  for each (link in links)
  {
    img = document.createElement('img');
    img.setAttribute('src', link.getAttribute('href'));
    img.setAttribute('width', (attachment.parentNode.clientWidth - 38 - 6));
    link.replaceChild(img, link.firstChild);
  }
}