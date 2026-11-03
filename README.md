# TeamPulse — Workload Dashboard

A responsive, browser-based dashboard for viewing a sample snapshot of a team's workload. TeamPulse displays team members, roles, task counts, capacity, and availability at a glance.

**[Open the live dashboard](https://rullan-harvey-laurence.github.io/Rullan_Activity4_-The-Analytics-Dashboard-Widget_BIT44/)**

## Features

- Responsive dashboard cards for desktop and mobile
- Search team members by name
- Filter members by Engineering, Design, or QA
- Visual workload bars that compare assigned tasks with capacity
- Helpful empty state when no members match the current search and filter
- Accessibility support, including labeled controls, filter button states, progress-bar descriptions, and visible keyboard focus
- No backend, dependencies, or build step required

## Built with

- HTML5
- CSS3
- Vanilla JavaScript
- [Sora](https://fonts.google.com/specimen/Sora) and [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts

## Run locally

1. Clone or download this repository.
2. Open `index.html` in a web browser.

The dashboard is a static site, so there is no package installation or compilation step.

## Customize the team data

The sample team records are defined in the `members` array at the top of `script.js`. Each record contains:

| Property | Description |
| --- | --- |
| `name` | Team member's display name |
| `role` | Role used by the dashboard filters (`Engineering`, `Design`, or `QA`) |
| `initials` | Text shown in the member's avatar |
| `tasks` | Current number of assigned tasks |
| `cap` | Workload capacity used to calculate the progress bar |
| `status` | Availability or workload label shown on the card |

Update or add records in that array to change the displayed data. This project uses local sample data; it does not connect to a live team-management service.

## Project files

```text
.
├── index.html   # Dashboard structure and accessible controls
├── script.js    # Sample data, search, filters, and card rendering
├── style.css    # Dashboard layout, responsive styles, and visual design
└── README.md    # Project documentation
```

## Deployment

The live version is published with GitHub Pages: [TeamPulse Workload Dashboard](https://rullan-harvey-laurence.github.io/Rullan_Activity4_-The-Analytics-Dashboard-Widget_BIT44/).

To publish your own changes, configure GitHub Pages in the repository's **Settings → Pages** and select the branch and folder containing `index.html`.

## License

No `LICENSE` file is currently included. Unless a license is added, standard copyright applies; reuse, distribution, or modification is not granted by default.
