# TravelBloom

Static travel discovery website built with HTML, CSS and JavaScript.

## How it works

The home page fetches `travel_recommendation_api.json` and creates cards for cities, temples and beaches. Search filters the displayed cards by title, and Reset restores them. Separate pages provide About and Contact layouts.

## Usage

Serve the repository over HTTP so browser fetch requests can load the JSON file. For example, with Python installed:

```sh
python -m http.server 8000
```

Open `http://localhost:8000` in a browser. No package installation or build step is required.

## Notes

The Contact form has no submission backend, and Visit buttons have no implemented navigation behaviour. Some pages reference a `logo.png` asset that is not included.
