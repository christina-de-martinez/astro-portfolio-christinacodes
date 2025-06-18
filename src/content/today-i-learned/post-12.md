---
title: The Xcode view reflects projects rather than the file system
publishDate: 'Feb 21 2025'
tags:
  - iOS
  - Xcode
  - Apple
seo:
  image:
    src: '/post-2.jpg'
    alt: Half open laptop on a desk
---

The Xcode view (called the Project Navigator) doesn't necessarily reflect the actual file system. Instead, it reflects projects.

This doesn't totally make sense to me, but it did trip me up when I deleted something in the project navigator and it didn't actually delete the files. Therefore, when I pushed to GitHub, it didn't delete those files from the repo like I had expected.
