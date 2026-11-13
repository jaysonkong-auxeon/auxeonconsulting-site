# Auxeon Consulting website: replacing images and videos

Every solution page already has original illustrations and an animated overview video.
To use your own photos or videos instead, upload a file with **exactly the same name and folder**
(overwrite the existing one). No code changes are needed.

## Files per solution page

| Page | File | Images folder | Video |
|---|---|---|---|
| Data Center Solutions | `data-center-solutions.html` | `images/data-center-solutions/` | `videos/data-center-solutions.mp4` |
| AI Solutions | `ai-solutions.html` | `images/ai-solutions/` | `videos/ai-solutions.mp4` |
| Enterprise Solutions | `enterprise-solutions.html` | `images/enterprise-solutions/` | `videos/enterprise-solutions.mp4` |
| BSS / OSS | `bss-oss.html` | `images/bss-oss/` | `videos/bss-oss.mp4` |
| Smart City | `smart-city.html` | `images/smart-city/` | `videos/smart-city.mp4` |
| IoT Devices | `iot-devices.html` | `images/iot-devices/` | `videos/iot-devices.mp4` |

Each images folder contains:

| File | Where it appears | Recommended size |
|---|---|---|
| `hero.jpg` | Top of the page, beside the title | 1600 x 900 px (16:9) |
| `use-case.jpg` | Beside the "Where it makes a difference" list | 1200 x 900 px (4:3) |
| `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg` | Gallery section | 1200 x 900 px (4:3) |
| `video-poster.jpg` | Still image shown before the video plays | 1280 x 720 px (16:9) |

Tips
- Keep the file names lower-case and the extension `.jpg`.
- Compress photos to under 300 KB each (e.g. with squoosh.app) so pages load fast.
- Videos: MP4 (H.264), ideally under 50 MB. GitHub rejects files over 100 MB.

## Using a YouTube video instead of an MP4

Open the page's `.html` file, find the line containing `data-youtube=""` and put the video ID
between the quotes. Example: for `https://www.youtube.com/watch?v=AbC123xyz`, use
`data-youtube="AbC123xyz"`. The YouTube video is then shown instead of the MP4.

## If a file is missing

If an image or video file is deleted, the page shows a dashed placeholder box that names the
exact file to upload, so it is always clear what goes where.
