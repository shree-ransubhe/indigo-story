# Case study videos

These files are wired in `index.html` under **Program evidence (video)**:

| File | Program | Source (your Desktop) |
|------|---------|------------------------|
| `cops-figma-to-production.mov` | **COPS** | Screen Recording 2026-01-19 at 11.28.08 AM 1.mov |
| `irops-brd-to-wireframes.mov` | **IROPS** | Screen Recording 2026-02-25 at 10.30.29 PM.mov |

**Playback:** `.mov` (QuickTime) works well in **Safari** and many **Chrome** builds on macOS. If a browser won’t play them, export **H.264 `.mp4`** with the same base names and swap the `<source>` in `index.html` to `type="video/mp4"`.

**Size:** Each file is large (~80–100+ MB). For **Netlify** or **Git**, consider hosting on **Vimeo** / **YouTube (unlisted)** and replacing the `<video>` block with an `iframe` embed (see comments in `index.html`).

**Privacy:** Do not push confidential recordings to a **public** repository without approval.
