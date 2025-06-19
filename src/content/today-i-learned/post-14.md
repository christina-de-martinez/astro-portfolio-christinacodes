---
title: Chaining commands in Windows PowerShell
publishDate: 'Feb 25 2025'
isFeatured: false
tags:
  - Windows
  - Terminal
seo:
  image:
    src: '/post-2.jpg'
    alt: Half open laptop on a desk
---

On Mac, I like to use `&&` to chain commands, which will execute the second command if the first one succeeds, and so on. This doesn't work on the PowerShell version I'm using on my Windows machine, so I spent far too long running each command individually like a caveperson.

Then I discovered that a semicolon `;` works similarly, but with a crucial difference. It executes each command one after another, regardless of whether the command before it failed.

So, while `Command1; Command2; Command3` on PowerShell is not _truly_ the same as `Command1 && Command2 && Command3` on zsh, it's been working well for my purposes.

**Side note**: [Pipeline Chain Operators](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_pipeline_chain_operators?view=powershell-7.5&viewFallbackFrom=powershell-5.1) are available in PowerShell 7.0+
