 Mvelo Fresh Farm — WEDE5020 Part 2

This is my Part 2 submission for Mvelo Fresh Farm. I updated the website from Part 1 by adding an external CSS file, fixing HTML structure mistakes, making forms accessible, and adding media queries so the site works on mobile, tablet, and desktop screens.

What I Changed From Part 1 

 Created style.css and linked it in index.html. To separate HTML code from CSS styling rules. 
Replaced div tags with main and article.  To fix HTML structure based on Part 1 lecturer feedback. 
 Connected form labels to inputs using for and id.  To make forms easier to use and accessible. 
 Added media queries for 768px and 480px screens.  To make the website layout adjust for phone and tablet screens. 
 Wrapped JavaScript in DOMContentLoaded.To stop the script from running before the web page finishes loading. 
Fixed folder structure so files sit in the main folder.  To make sure CSS and image file paths load correctly without breaking. 

Responsive Testing Screenshots

I tested the website in Chrome Developer Tools on three different screen sizes:

1.Desktop View (1024px and up)
[Desktop View](screenshots/desktop.png)
Shows navigation at the top, hero text, and products side by side in three columns.

2.Tablet View (768px)
[Tablet View](screenshots/tablet.png)
Shows the product cards automatically fitting into two columns.*

3.Mobile View (375px to 480px)
[Mobile View](screenshots/mobile.png)
Shows elements stacked vertically in a single column so it is easy to scroll on phones.


References

1.MDN Web Docs. Responsive design. Available at: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
2.W3C. CSS Flexible Box Layout Module Level 1. Available at: https://www.w3.org/TR/css-flexbox-1/