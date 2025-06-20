import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    redirects: {
        '/ttt-ception': 'https://inception-tic-tac-toe.lovable.app'
    },

    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        }),
        react()
    ],

    adapter: netlify()
});
