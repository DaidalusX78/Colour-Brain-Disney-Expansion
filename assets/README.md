# Card Assets Guide

Place your local question logos and answer images here. The app supports any standard image format (`.png`, `.jpg`, `.jpeg`, `.svg`, `.webp`).

## Directory Structure

```text
src/assets/
├── logos/       <- Franchise / Movie title logos (Question side)
└── answers/     <- Character / Scene pictures (Answer side)
```

## How to Link Images in `src/questions.js`

You can use either:
1. **Local relative file paths** (Recommended for offline play):
   ```javascript
   {
     id: 1,
     deck: 'disney',
     franchise: 'Encanto',
     logo_url: 'assets/logos/encanto.png',
     image_url: 'assets/answers/bruno.png',
     ...
   }
   ```

2. **Web image URLs**:
   ```javascript
   {
     id: 1,
     deck: 'disney',
     franchise: 'Encanto',
     logo_url: 'https://example.com/encanto_logo.png',
     image_url: 'https://example.com/bruno.png',
     ...
   }
   ```

## Automatic Fallback
If an image path or URL is missing or fails to load, the app automatically falls back to the clean text badge. The card will never break or display a broken image icon.
