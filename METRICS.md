# Metrics on the public page

The **250% faster design delivery cycle** line is **shown by default** on `index.html` (class `metrics--has-numbers` on the outcomes section), because it already appears on your public resume.

To **hide** the extra quantitative paragraph under outcomes, remove `metrics--has-numbers` from:

```html
<section id="metrics" class="metrics metrics--has-numbers" ...>
```

If you later need to gate a **new** number, reuse the same pattern in `styles.css` (`.metrics__quant` hidden until the modifier class is present).
