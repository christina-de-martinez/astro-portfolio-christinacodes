---
title: Deprecation using ObsoleteAttribute in C#
publishDate: 'Mar 11 2025'
isFeatured: true
tags:
  - C#
  - Windows
seo:
  image:
    src: '/post-2.jpg'
    alt: Half open laptop on a desk
---

In C#, there's an ObsoleteAttribute marker for elements that you want to deprecate.

When you mark something with ObsoleteAttribute, accessing it shows a compiler warning, and calling it produces a compiler error. You can define a custom message to explain why it's obsolete and to suggest an alternative.

_Helpful_: [.NET docs](https://learn.microsoft.com/en-us/dotnet/api/system.obsoleteattribute?view=net-9.0)
