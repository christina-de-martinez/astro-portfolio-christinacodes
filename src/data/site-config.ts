export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Christina Martinez',
    subtitle: 'Software Engineer',
    description:
        "Experienced software developer with a background in digital marketing and project management. Since 2020, I've built scalable web applications as both a web developer and full-stack engineer, contributing to products used by hundreds of thousands of users. Passionate about creating intuitive user experiences, I share coding insights with my 9,000-follower community and build viral side projects. Explore my work, projects, and expertise in modern web development.",
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        }
        // {
        //     text: 'Projects',
        //     href: '/projects'
        // },
        // {
        //     text: 'Blog',
        //     href: '/blog'
        // },
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
    ],
    footerNavLinks: [
        // {
        //     text: 'About',
        //     href: '/about'
        // },
        // {
        //     text: 'Contact',
        //     href: '/contact'
        // },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/christina.codes/'
        },
        {
            text: 'Bluesky',
            href: 'https://bsky.app/profile/christinacodes.dev'
        }
    ],
    hero: {
        // title: 'Hi There & Welcome to My Corner of the Web!',
        text: "I'm **Christina Martinez**, and um... this is awkward. You found my new site before it's ready. So, what now? I guess you can find me on <a href='https://github.com/christina-de-martinez'>GitHub</a> or follow me on <a href='https://bsky.app/profile/christinacodes.dev'>Bluesky</a>.",
        image: {
            src: '/hero.jpg',
            alt: 'Christina standing at a balcony overlooking the Mediterranean'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: 'mailto:hi@christinacodes.dev'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
