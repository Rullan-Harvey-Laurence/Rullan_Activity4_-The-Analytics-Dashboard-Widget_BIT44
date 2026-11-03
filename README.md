# TeamPulse: Workload Dashboard

A responsive, browser-based dashboard for viewing a snapshot of an Engineering, Design, and QA team's workload. TeamPulse displays each team member's role, task load, availability status, and workload progress, with controls to search by name and filter by role.

## Features

- Responsive card layout for desktop and mobile screens
- Search team members by name
- Filter the dashboard by Engineering, Design, or QA
- Workload progress bars showing tasks against each member's capacity
- Empty state when no team members match the search
- Accessible labels, button states, progress bar descriptions, and visible keyboard focus styles
- Sample team data stored directly in JavaScript; no backend or build tools required

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts: Sora and Inter

## Live demo

GitHub Pages is enabled for this repository. To publish or confirm the live site, open **Settings → Pages** and check the published URL. No live demo URL is currently configured in the repository metadata.

## Team data

The dashboard currently uses a sample list of team members defined in `script.js`. Each entry includes a name, role, initials, task count, capacity, and status. Update that array to customize the cards. This is a static front-end demo: it does not fetch live workload data or save changes.

## Deployment

This is a static site and can be hosted on GitHub Pages or another static web host. On GitHub, open the repository's **Settings → Pages**, select the `main` branch and the root folder, then save. The site loads `index.html`, which references `style.css` and `script.js` from the repository root.

## Project structure

```text
.
├── index.html   # Dashboard markup and page structure
├── script.js    # Sample team data, search, filters, and card rendering
├── style.css    # Layout, responsive styling, and visual design
└── README.md    # Project documentation
```

## Contributing

Suggestions and improvements are welcome. Open an issue to discuss a change, or submit a pull request with a clear description of what it improves.

## License

No license file is currently included. Unless a license is added, standard copyright applies and reuse, distribution, or modification is not granted by default. Add a `LICENSE` file if you want to specify terms for reuse.
