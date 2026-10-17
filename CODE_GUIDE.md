# GreenFields code guide

GreenFields is a static website. Open `index.html` in a browser; no build step is required.

## Structure

- Root HTML files: home, about, products, product details, farm, gallery, contact, and enquiries.
- `assets/css/styles.css`: shared site styles.
- Other `assets/css/*.css` files: page-specific styles and premium presentation layers.
- `assets/js/main.js`: shared footer and navigation behavior.
- Other `assets/js/*.js` files: product filters, gallery, farm interactions, contact and enquiry forms, and admin demonstrations.
- `assets/images/`: original photos and other visual assets.
- Root Markdown files: feature notes, deployment guidance, and change history.

Each HTML page declares its own stylesheet and script dependencies. Check those tags
before editing a feature: base and premium files can work together. Keep their load
order and CSS rule order intact so overrides continue to work. Admin scripts remain
in the project even where their corresponding preview pages are absent.

## Formatting

Use two-space indentation and single quotes in JavaScript. Prettier settings live
in `.prettierrc.json`; `.editorconfig` supplies matching editor defaults. With
Prettier installed, run from the project directory:

```sh
prettier --write "*.html" "assets/css/*.css" "assets/js/*.js"
prettier --check "*.html" "assets/css/*.css" "assets/js/*.js"
```

Keep related event handlers with the feature they control. Use descriptive names
for new functions and variables, and comments for non-obvious behavior. Keep image
paths, element IDs, and data attributes consistent between HTML and JavaScript.

## Review changes

Check desktop and mobile navigation, home slides, product filters and details,
gallery controls, farm interactions, and the enquiry builder. Follow
`DEPLOYMENT_AND_TESTING.md` for deployment checks. Existing forms and admin assets
are frontend previews; formatting does not add submission or authentication services.
