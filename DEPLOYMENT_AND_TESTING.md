# GreenFields — GitHub Pages deployment and testing

## What was checked
- All 10 source HTML files were checked; 8 public pages are included in this deployment package.
- All local HTML, CSS, JS and image references resolve to files in this package.
- All JavaScript files pass Node syntax checking.
- All source HTML pages have a title, viewport meta tag, one H1 and image alt attributes.
- Added favicon, descriptions for 8 public pages, sitemap, robots.txt and .nojekyll.

## Publish on GitHub Pages
1. Back up the existing GitHub repository first.
2. Extract the ZIP. Upload **the contents** of the extracted folder to the repository root (not the containing folder). Include the `assets` directory.
3. Commit changes to the branch used by GitHub Pages.
4. Check Settings → Pages and confirm the publishing source.
5. Open https://mulauli04.github.io/greenfields-farming-demo/ and test all public navigation links.
6. On a phone, test menus, sliders, crop filters, gallery lightbox and enquiry form.
7. Hard-refresh if old CSS/JS is cached.

## Important launch limitations
- Enquiry and contact forms do not submit to a server; users can prepare/copy messages only. Do not claim messages are delivered.
- Admin login/dashboard are demos and not secure authentication. Do not enter real passwords or customer data. Do not advertise the admin pages to customers. Robots.txt is not a security control. These two demo pages have been excluded from this public deployment package. Host a protected admin application separately.
- Replace any unverified contact details, claims, and draft company copy with owner-approved information.
- SEO additions improve page metadata but do not guarantee search indexing.
- Browser/mobile functional testing was not performed automatically.
