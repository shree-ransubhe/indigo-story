# IndiGo Story

Static **case study page** for resume and hiring links. Open `index.html` in a browser, or serve the folder locally.

## Local preview

```bash
cd "/Users/shreenivas.ransubhe/Documents/Cursor Projects/IndiGo Story"
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

`main.js` swaps in gallery/hero images when the files under `assets/images/` exist; placeholders stay until then.

## Netlify (later)

Drag-and-drop this folder in the Netlify UI, or connect the folder as a static site repo. No build step required.

## Optional metrics

See [METRICS.md](METRICS.md) before enabling the quantitative TAT line.

## Case study videos (COPS & IROPS)

Videos are under [assets/videos/](assets/videos/README.md) as `.mov` (copied from your Desktop recordings). For broader browser support or smaller deploys, re-encode to `.mp4` or use a hosted embed—see that README.
