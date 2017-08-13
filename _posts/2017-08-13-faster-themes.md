---
title: How I Create Faster Themes
date: '2017-08-13 02:49:48'
layout: post
---

Performance is one of the most important things I care about on my work and there are some things I do to help me achieve a good score:

1. I don't ever use CSS frameworks (Bootstrap, ...) they are very bad for performance and for coding a custom work, too much code bloat which in return make pages load slower.
 
2. Instead, I craft the Theme's code from scratch using Sass, ITCSS, this in return produces high quality faster and small custom code.

3. I use automation tools like Gulp to minify the final CSS and JS into only one file, and in the case of Ghost and Jekyll, the CSS is inlined in the header which would increase the performance may be 10 to 20%.

4. For the themes demos, I use the available tools everyone can use, for example, DigitalOcean for WP and Ghost and I use Netlify for Jekyll and all with the default hosting settings. Aspire Themes is also built with Jekyll and hosted on Netlify and the score is 99 and it is open source. 

5. One more important thing is that I optimize the demo images and I expect everyone should do this, but uploading big images would definitely make things worse even if the theme is 100% and Google would complain about images optimization as images as they play a huge role to the general score and considered outside the theme job scope. So I do my best from the theme side and then the site owner would do his best too.

This is an example of the Aspire Ghost theme and you can see that Google is complaining about images.

So, I optimize the code very very much, optimize the images, host in a good place.

The case for WordPress, for example, is that it's loading some code that makes the score less, but if you checked the Bold for Ghost, you will get 91/97 score. So every time you install a new plugin to WP, performance will decrease due to the more resources loaded which are outside the theme scope.

So of course, with the themes and more optimized images, you can achieve the same score. I hope that I make things as clear as possible and let me know if you have any other questions.