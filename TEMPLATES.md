# Content templates

Reusable includes for posts. All of them pick up the site's neobrutalist styling automatically.

## Image gallery

Shows every image (`jpg/jpeg/png/gif/webp`, any case) found under a folder.

```liquid
{% include image-gallery.html folder="/assets/images/mcell" %}
{% include image-gallery.html folder="/assets/images/mcell" cols=3 captions=true %}
```

| param | default | notes |
|---|---|---|
| `folder` | — | path fragment matched against static files |
| `cols` | 4 | desktop columns; collapses to 2 on mobile |
| `captions` | false | show filenames under images |

## Video / embed

Responsive, bordered embed. Works for YouTube, Vimeo, Sketchfab, or any iframe URL.

```liquid
{% include video.html youtube="46nEKD2Wn9c" title="M-CELL robotic drawing" %}
{% include video.html vimeo="1006429024" title="Dancing Columns" %}
{% include video.html src="https://sketchfab.com/models/xxx/embed" aspect="4/3" title="Chess set" %}
```

| param | default | notes |
|---|---|---|
| `youtube` / `vimeo` | — | video id (uses youtube-nocookie for privacy) |
| `src` | — | any embed URL, used when no id given |
| `aspect` | `16/9` | CSS aspect-ratio (e.g. `4/3`, `800/510`) |
| `title` | "Embedded video" | iframe title for accessibility |

## 3D model (.glb / .gltf)

Uses Google's `<model-viewer>` — orbit controls and optional AR with zero custom code. Put models in `assets/models/`.

```liquid
{% include model.html src="/assets/models/chess.glb" %}
{% include model.html src="/assets/models/chess.glb" poster="/assets/images/chess.png" height="500px" ar=true %}
```

## three.js sketch

For custom interactive 3D. Write an ES module in `assets/js/sketches/` (copy `demo-cube.js` as a starting point — it imports `three` and `three/addons/` via an import map the include sets up).

```liquid
{% include three-sketch.html src="/assets/js/sketches/demo-cube.js" %}
{% include three-sketch.html src="/assets/js/sketches/my-sketch.js" id="my-sketch" height="500px" %}
```

If a page has several sketches, give each a unique `id` and query that id in the module.

## 2D canvas sketch

For generative 2D work (vanilla canvas). Copy `assets/js/sketches/demo-dots.js` as a starting point.

```liquid
{% include canvas-sketch.html src="/assets/js/sketches/demo-dots.js" %}
{% include canvas-sketch.html src="/assets/js/sketches/my-dots.js" id="my-dots" height="500px" %}
```
