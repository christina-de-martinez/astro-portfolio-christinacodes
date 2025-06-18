---
title: WebSockets vs. Webhooks
publishDate: 'Jun 1 2025'
isFeatured: true
tags:
  - Web
  - JavaScript
  - Node
seo:
  image:
    src: '/post-2.jpg'
    alt: Half open laptop on a desk
---

I knew some about Webhooks, but confused them with WebSockets, when they're really not very similar at all.

Webhooks can send an to an app when a given event happens. One example is a Slack bot that I set up using a GitHub Webhook, which notifies my team's channel when a build fails. It's a one-time notification.

WebSockets are a bidirectional, persistent communication channel. Popular use cases include chat, or online games.

I learned about WebSockets because I was trying to participate in the [Web Dev Challenge Hackathon by CodeTV](https://codetv.dev/blog/web-dev-challenge-hackathon-s2e2-multi-device-game-temporal). I wasn't able to get my submission done in time, but this knowledge still came in handy when [the next challenge](https://codetv.dev/blog/web-dev-challenge-hackathon-s2e3-devious-video-player-mux) came around. [Here's my submission](https://christinas-mux-video-player.vercel.app/) for that one, which uses WebSockets.
