# [docs.npmjs.com](https://docs.npmjs.com)

The place where all things npm will one day be documented.

## Editing Content

All the markdown files can be found in the [content](content) directory. Some of these files live here in this repository, others live in other repositories and are imported during the build process. These imported files are [ignored by git](.gitignore) to prevent people from accidentally editing the wrong files.

- [api](https://github.com/npm/npm/tree/master/doc/api) is copied from [npm](https://github.com/npm/npm/tree/master/doc/api).
- [cli](https://github.com/npm/npm/tree/master/doc/cli) is copied from npm.
- [enterprise](content/enterprise) lives in this repo.
- [files](https://github.com/npm/npm/tree/master/doc/files) is copied from npm.
- [misc](https://github.com/npm/npm/tree/master/doc/misc) is copied from npm.

## HTML Frontmatter for Page Metadata

This site uses [html-frontmatter](https://www.npmjs.org/package/html-frontmatter) to add
metadata to pages.

### title

If a file has a `title` property in its frontmatter, it will be used for
the `<title>` of the rendered HTML page. If `title` is absent from the
frontmatter, the filename (without the .md extension) is used.

### order

Pages are sorted alphabetically by default, but the page order per section
can be overridden by using a numerical `order` frontmatter property. It is
not necessary to order all pages in a section: Any pages in a section that
don't have an `order` property will be relegated to the end of that section.

## Development

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

To run the app locally:

```sh
npm install
npm start
```

Now you have a server running at at [localhost:5000](http://localhost:5000)

## The Build Process

The build is run automatically after every `npm install` and before `npm start`. Here's an overview of what it does.

1. Copies [npm documentation](https://github.com/npm/npm/tree/master/doc) from `./node_modules/npm/doc` to `./content`
1. Walks the [content directory](/content) collecting markdown files.
1. Reads the contents of each markdown file.
1. Parses [HTML Frontmatter](#html-frontmatter) from the markdown files
1. Converts markdown to HTML
1. Writes [content.json](/content.json) with HTML content of each file included.

The copied and generated files are [ignored](/.gitignore) for two reasons:

1. Keeps the git history uncluttered.
1. Prevents humans from accidentally editing auto-generated files

## Webservice

The [content.json](/content.json) file is served publicly at `/content.json`
with CORS support, allowing browsers on other domains to fetch all the npm
documentation and accompanying metadata with a single HTTP call.

## Deployment

```sh
export NODE_ENV=production
```
