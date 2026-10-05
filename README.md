# TravelBloom

Static travel discovery website built with HTML, CSS and vanilla JavaScript. All application logic runs in the browser; no backend, framework or build step is required.

## How it works

The home page fetches `travel_recommendation_api.json` and creates cards for cities, temples and beaches. Search filters the displayed cards by title, and Reset restores them. Separate pages provide About and Contact layouts.

## Usage

Preview `index.html` using a static web server, such as VS Code Live Server. This lets the browser load the local JSON file through `fetch()`; opening the HTML through a `file://` URL may block that request.

Alternatively, if Python is installed, its built-in server can serve the same static files:

```sh
python -m http.server 8000
```

For the Python command above, open `http://localhost:8000` in a browser. Python is only an optional preview tool, not an application dependency.

The HTML, CSS, JavaScript, JSON and image files can also be hosted directly on GitHub Pages or another static host.

## Notes

The Contact form has no submission backend, and Visit buttons have no implemented navigation behaviour. Some pages reference a `logo.png` asset that is not included.
