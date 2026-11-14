# Auxeon Consulting website: replacing images and videos

Every service and solution page has original illustrations and an animated "in action" video.
To use your own photos or videos instead, upload a file with **exactly the same name and folder**
(overwrite the existing one). No code changes are needed.

## Service pages

| Page | File | Images folder | Video |
|---|---|---|---|
| IT Strategy & Advisory | `it-strategy-advisory.html` | `images/it-strategy-advisory/` | `videos/it-strategy-advisory.mp4` |
| Digital Transformation | `digital-transformation.html` | `images/digital-transformation/` | `videos/digital-transformation.mp4` |
| Programme & Project Management | `programme-project-management.html` | `images/programme-project-management/` | `videos/programme-project-management.mp4` |
| Solution Architecture & Integration | `solution-architecture-integration.html` | `images/solution-architecture-integration/` | `videos/solution-architecture-integration.mp4` |
| Cybersecurity | `cybersecurity.html` | `images/cybersecurity/` | `videos/cybersecurity.mp4` |
| Operations & Managed Services | `managed-services.html` | `images/managed-services/` | `videos/managed-services.mp4` |

## Solution pages

| Page | File | Images folder | Video |
|---|---|---|---|
| Data Center Solutions | `data-center-solutions.html` | `images/data-center-solutions/` | `videos/data-center-solutions.mp4` |
| AI Solutions | `ai-solutions.html` | `images/ai-solutions/` | `videos/ai-solutions.mp4` |
| Enterprise Solutions | `enterprise-solutions.html` | `images/enterprise-solutions/` | `videos/enterprise-solutions.mp4` |
| BSS / OSS | `bss-oss.html` | `images/bss-oss/` | `videos/bss-oss.mp4` |
| Smart City | `smart-city.html` | `images/smart-city/` | `videos/smart-city.mp4` |
| IoT Devices | `iot-devices.html` | `images/iot-devices/` | `videos/iot-devices.mp4` |

## Files in each images folder

| File | Where it appears | Recommended size |
|---|---|---|
| `hero.jpg` | Top of the page, beside the title | 1600 x 900 px (16:9) |
| `use-case.jpg` | Beside the "Where it makes a difference" list | 1200 x 900 px (4:3) |
| `video-poster.jpg` | Still image shown before the video plays | 1280 x 720 px (16:9) |

Tips
- Keep file names lower-case with the `.jpg` extension.
- Compress photos to under 300 KB each (e.g. with squoosh.app) so pages load fast.
- Videos: MP4 (H.264), ideally under 50 MB. GitHub rejects files over 100 MB.

## Using a YouTube video instead of an MP4

Open the page's `.html` file, find `data-youtube=""` and put the video ID between the quotes.
For `https://www.youtube.com/watch?v=AbC123xyz`, use `data-youtube="AbC123xyz"`.

## If a file is missing

The page shows a dashed placeholder box naming the exact file to upload.
