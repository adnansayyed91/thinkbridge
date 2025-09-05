## Session 01 
1. Practiced Emmet abbreviations (before → after expansions).
-> /session-01/emmet-practice.html

2. Created a user snippet for HTML boilerplate (`myhtml`).

3. Configured `.vscode/launch.json` for JavaScript debugging.
-> /session-01/app.js

4. Understood how to use breakpoints + step-through debugging in VS Code.
-> /session-01/app.js


## Session 02
1. Built a signup form with First Name, Last Name, Email, Mobile, Password, Confirm Password and Remember me fields.
-> /session-02/signup.html

2. Used `aria-describedby` with `<small>` elements to provide helper text for screen readers.

3. Tested what happens when ARIA references are missing or broken.

4. Ensured keyboard navigability for all inputs.

5. Generated Lighthouse Accessibility Report and exported it as HTML.
-> accessibility-report.html


## Session 03
1. Practiced CSS selectors (element, id, class, attribute).
-> /session-03/style.css (linked to /session01/signup.html)

2. Understood CSS Cascade:
   - Source order (last rule wins).
   - Specificity (ID > class > element).
   - `!important` overrides everything.

3. Understood CSS Inheritance:
   - Some properties (e.g., `color`, `font-family`) flow down from parent to child.
   - Others (e.g., `margin`, `padding`, `border`) do not inherit.

4. Explored the CSS Box Model:
   - Margin, border, padding, content.
   - Used DevTools to visualize changes.

5. Modified input(email) padding from `10px` → `20px 15px` in DevTools.
-> /session-03/boxmodel-before.png
-> /session-03/boxmodel-after.png

## Session 04

1. Continued working on yesterday’s (02/09/2025) portfolio project.
    - Copied index.html and style.css from yesterday into today’s folder.
    - Updated them to implement responsive layout using Flexbox.

2. Build a responsive header using Flexbox:
    - Desktop: horizontal navigation links.
    - Mobile: hamburger menu using CSS-only checkbox toggle.
->  /session-04/index.html

3. Created a card grid layout for About, Technologies, and Contact sections:
    - Used flex-wrap for responsive wrapping of cards.
    - Adjusted gaps between cards using gap and margins.
->  /session-04/style.css

4. Added responsive behavior using media queries:
    - Mobile screens: stacked cards, hidden nav by default, hamburger shown.
    - Tablet screens: adjusted card widths for better layout.
->  /session-04/responsive.css

5. Tested responsive behavior in browser:
    - Verified nav switching from horizontal → hamburger menu.
    - Checked card stacking and proper spacing at different screen widths.
->  /session-04/responsive-capture.mp4