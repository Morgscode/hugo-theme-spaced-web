# Spaced Web Theme

A beautifully minimalistic Hugo theme for personal and portfolio websites. With dark mode, page search and a11y out of the box.

![Intro](https://github.com/Morgscode/hugo-theme-spaced-web/blob/master/images/cover.png)

Main features:

- Dark mode support
- a11y support
- Page search
- Mobile responsive
- Blog author accreditation
- Configurable colors
- Configurable banner images for blog posts

## Installation

Create a new Hugo site:

```bash
$ hugo new site [path]
```

Clone this repository into `themes/` directory:

```bash
$ cd [path]
$ git submodule add https://github.com/Morgscode/hugo-theme-spaced-web.git themes/spaced-web
```

Add this line in the `config.toml` file:

```toml
theme = "spaced-web"
```

## Configuration

### Site params

In your `config.toml` file, define the following variables in `params`:

- `description` = This will be the default html meta description for the blog and it's homepage. It can be overridden by setting a description in the front-matter of any page or post.
- `useCover`: wether or not you want to use a banner images for the blog and its posts
- `[[params.author]]`
- `[[params.author]]name`: The name of the primary blog author
- `[[params.author]]description`: The primary blog author's description

To set the blog author's avatar image - place an image named `blog-author.jpg` in your sites `/content/images` folder. 

To add a menu item, add the following lines in `menu`:

```toml
[[menu.menu_name]]
  identifier = "item-identifier"
  name = "Item Name"
  url = "/item-slug"
```

### Site colors

You can customise the theme colors from your sites config.

```toml
[params.colors]
  black = "#222222"
  white = "#fafafa"
  grey = "#dcdde1"
  red = "#e84118"
  blue = "#00a8ff"
  green = "#4cd137"
  yellow = "#fbc531"
  purple = "#9c88ff"
```

### Site icon (favicon)

The theme ships with a default site icon (favicon) that is used in the tab in your browser but also the shortcut icon on mobile devices. To use your own favicon, just add it 
to your sites assets directory `/assets/images/favicon.png`.

The theme expects a `.png` file to be used. Favicons are best kept with an aspect ratio of `1:1`.

### Cover images

To use cover images for the blog: set the `useCover` param to `true`.

```toml
[params]
  useCover = true
```

To add a default cover image for your entire blog, name your image `blog-cover.jpg` and place in `assets/images`.

To add a default cover image for a specific post - place an image named `cover.jpg` in the page bundle.

[Read the Hugo documentation](https://gohugo.io/content-management/menus/#readout) for more informations about menus.

### Syntax highlighting

This theme ships with a slightly altered monakai syntax highlighting stylesheet and more or less the default markup highlight configuration. To use it set the `noClasses` param to false in the `markup highlight` config.

```toml
[markup]
  [markup.highlight]
    noClasses = false
```

The theme's base layout pulls in a css stylesheet which is a tiny variation on the `monokai` theme to handle the highlighting styles: `/assets/css/syntax.css`

### Sidebar 

The theme ships with a sidebar comes with a search form which has %like% behaviour for all of your page names.

To active the sidebar set the `usesidebar` site param to `true` in your `config.toml`

```toml
[params]
  useSidebar = true
```

## Content Types 

### Canonical Page

This theme ships with a convenience archetype called `page`. It has some subtle behaviour layered on top of the deafult archetype `default.md`.

```md
---
title: "{{ replace .Name "-" " " | title }}"
name: {{ .Name }}
draft: true
type: page
layout: inner
bundle: {{ .Name }}/bundle
---
```

Setting a `type` just lets hugo know we want this content to be treated slightly differently. Specifically, it's going to look for layouts in the `layouts/pages` directory in the theme. So you can easily define a specific layout, and also re-use layouts for your canonical pages for your website.

To create a new page:

```bash
hugo new --kind page %PAGE NAME% 
```

Creating a new content type gives us a new page in your website's `/content` directory.

The new page will contain an `_index.md` file - This tells hugo that it's not just a standard lister page, but that it should expect to also have it's own front-matter and content. [Read about _index.md](https://gohugo.io/content-management/organization/#index-pages-_indexmd)

Each new page created comes with a default bundle assignment. It looks for a directory called `bundle` inside the current page directory.

## Content Sections

### Tiles

### Column Grid

## License

This theme is released under the [**MIT**](/LICENSE.md) License.
