---
title: Haptic motor controllers
publishDate: 'April 13 2025'
isFeatured: true
tags:
  - Circuits
  - Wearable electronics
  - Hardware
seo:
  image:
    src: '/post-2.jpg'
    alt: Half open laptop on a desk
---

I started my first wearable circuits project.

This is a great application of ChatGPT. I can:

- Ask it how to approach the project and whether it's doable for a beginner
- Ask it for basic circuit schematics
- Ask it why certain wires need to be connected to certain parts
- Learn as I work, by being curious and asking it to walk me through what's going on
- Upload pictures of my wiring and ask what I did wrong
- Ask it to help me write Arduino code

I thought that if I had an Adafruit Flora, a battery pack, and wiring, I could control the little vibrating motors. But it turns out that the microcontroller sends too much power. Technically, I could get it to vibrate, but the LOW setting wasn't low enough, so I couldn't get it to turn off. Plus, keeping it at that power runs the risk of breaking the motors.

To fix this, I needed to get a [haptic motor controller](https://www.adafruit.com/product/2305). Now I can keep working on my project!
