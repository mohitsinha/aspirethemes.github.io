---
layout: doc
title: Bold
status: review
categories: docs
platform: WordPress
---

* Name: **Bold**
* Description: Blog and Magazine Clean WordPress Theme
* Current Version: 1.0.0
* Released: In Review

---

* [Theme Activation & Import Demo Data (Video)](#theme-activation--import-demo-data-video)
  * [Installation via WordPress Theme Installer](#installation-via-wordpress-theme-installer)
  * [Installation via FTP](#installation-via-ftp)
  * [Import Demo Data](#import-demo-data)
* [Theme Customizer](#theme-customizer)
* [Home Hero](#home-hero)
* [Galleries](#galleries)
* [Widgets](#widgets)
* [Menus](#menus)
* [Translation](#translation)
* [Theme Development](#theme-development)
* [Support](#Support)

---

### Theme Activation & Import Demo Data (Video)

This is a queck video showing how to install the theme and import the demo content. For installation steps, you can check the process below.

<iframe src="https://www.youtube.com/embed/TZED01pBVTY" frameborder="0" allowfullscreen></iframe>

---

### Installation via WordPress Theme Installer

Log into your WordPress Dashboard → Appearance → Themes

- Login to your WordPress Dashboard, go to **Appearance → Themes**.
- At the top, click **Add New**, then click **Upload Theme**.
- Choose the **bold.zip** zip file you will find within the whole package that you downloaded from Themforest.
- Click **Install Now**.
- The last step is to click activate once all the files are correctly uploaded.

![Upload Theme](/images/docs/wordpress/shared/upload-theme.png)

![Choose Theme](/images/docs/wordpress/shared/choose-theme-file.png)

![Activate Theme](/images/docs/wordpress/shared/activate-theme.png)

---

### Installation via FTP

1. Login to the SFTP/FTP account for your site.
2. Navigate the to the WordPress directory, and follow the path `wp-content/themes.`
3. Extract `bold.zip` file (it’s in the zip file you downloaded) and upload the bold folder.
4. Once it’s uploaded, go to your WordPress Admin, browse to `Appearance > Themes.`
5. Click the `Activate` link.

---

### Import Demo Data

The theme comes with the demo content that you can import with one click button.

First, you will need to install the [One Click Demo Import](https://wordpress.org/plugins/one-click-demo-import/) plugin then activate it.

Second, go to `Appearance > Import Demo Data` and click the `Import Demo Data` button. It will take a few seconds, then you are done and have the demo content installed.

![Import Demo Data](/images/docs/wordpress/shared/demo-import.png)

---

### Theme Customizer

WordPress customizer is a tool which allows you to edit all the style options from a theme and visualize changes live, as you edit them. To open it, go to `Appearance > Customize`.

![Theme Customizer](/images/docs/wordpress/bold/customizer.png)

#### Footer Copyright

Bold has an option to edit the footer copy right options, from the customizer window, choose `Site Identity > Footer Copyright` to easily update the copyright text.

---

### Home Hero

![home-hero](/images/docs/wordpress/bold/home-hero.png)

The hero section shows the blog *Tagline* and the *Header Image*.

To set the *Tagline*, go to `Appearance > Customize` then `Site Identity`.

To set the *Header Image*, go to `Appearance > Customize` then `Header Image`.

If the *Header Image* is not exist, the hero section will be hidden, but you can show only the *Header Image* without the *Tagline*.

---

### Galleries

The demo is using the [Tiled Galleries](https://jetpack.com/support/tiled-galleries/) which is a Jetpack add-on that enables to display your galleries in different new styles.

First, install [Jetpack](https://wordpress.org/plugins/jetpack/) and then follow this [guide](https://jetpack.com/support/tiled-galleries/) which will introduce you to Tiled Galleries and how to confugure and create new galleries with it.

---

### Widgets

Bold theme includes multiple widgets areas.

Widgets can be added to these areas by navigating to `Appearance > Widgets`.

The footer section has four registered widget sections and the Sidebar (Off canvas) area has widgets support

![Widgets](/images/docs/wordpress/bold/widgets.png)

---

### Menus

Bold theme comes with a custom social media icons menu, you can create and manage by navigating to `Appearance > Menus`.

You can create a normal menu with a custom link to the social media site, then you can assign the menu to the `Social Menu` location in the Menu Settings section.

![social-media-menu](/images/docs/wordpress/bold/social-media-menu.png)

Bold is using [Social Logos](https://github.com/Automattic/social-logos). You can look this [gallery](https://wpcalypso.wordpress.com/devdocs/design/social-logos) for all the available icons.

---

### Translation

Bold theme is full ready to be translated into other languages and could be easily translated with [poedit.net](https://poedit.net/) application.

The theme contains the main translation file `bold.pot` inside the languages directory which will be used by poedit application.

Here are simple steps:

1. Install poedit and open it.
2. Once the app is opened click Create new translation.
3. Choose the `bold.pot` file inside the theme `bold/language` directory.
4. Once the translation is done, save the file according to your language code. Find a list of language codes at [WordPress in your Language](https://make.wordpress.org/polyglots/teams/). As an example, the language code for English (UK) is `en_GB`, so you will end up with two new files: `en_GB.po` and then `en_GB.mo`.
5. When that’s done, simply upload the files to `bold/language` folder using FTP.
6. Change the site language by going to `WordPress > General > Settings` and choose the target language from `Site Language` drop-down menu.

---

### Theme Development

If you are a developer and need to do customization work, the theme is using [Gulp](https://github.com/gulpjs/gulp) to compile [Sass](http://sass-lang.com/) and JavaScript. This improves the development flow and making it much faster.

First, make sure you have [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/), and [Bower](https://bower.io/#install-bower) installed, then run the-the following commands in the theme root directory to install *npm* and *bower* dependencies.

{% highlight shell %}
npm install
{% endhighlight %}

To start Gulp, run:

{% highlight shell %}
gulp
{% endhighlight %}

This will compile Sass and JavaScript files, and start watching changes as you edit files.

---

### Support

If you have any questions, I'd be happy to help.

* _Email:_ [aspirethemes@gmail.com](mailto:aspirethemes@gmail.com)
* _Twitter:_ [@aspirethemes](https://twitter.com/aspirethemes)
