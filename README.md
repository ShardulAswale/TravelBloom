# TravelBloom

Static travel discovery website built with HTML, CSS and vanilla JavaScript. All application logic runs in the browser; no backend, framework or build step is required.

## How it works

The home page fetches `travel_recommendation_api.json` and creates cards for cities, temples and beaches. Search filters the displayed cards by title, and Reset restores them. Separate pages provide About and Contact layouts.

## Usage

Preview `index.html` with VS Code Live Server, or publish the repository files directly to GitHub Pages or another static host. Serve the files over HTTP so the browser can load `travel_recommendation_api.json`.

No package installation or build step is required.

## Notes

The Contact form has no submission backend, and Visit buttons have no implemented navigation behaviour. Some pages reference a `logo.png` asset that is not included.
