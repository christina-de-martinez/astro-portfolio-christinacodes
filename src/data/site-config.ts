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
        "Software developer with a background in digital marketing and project management. Since 2020, I've built scalable web applications as both a web developer and full-stack engineer, contributing to products used by hundreds of thousands of users. Passionate about creating intuitive user experiences, I share coding insights with my 8,000-follower community and build viral side projects. Explore my work, projects, and expertise in modern web development.",
    image: {
        src: '/hero.jpg',
        alt: 'Christina standing at a balcony overlooking the Mediterranean'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        // {
        //     text: 'Projects',
        //     href: '/projects'
        // }
        {
            text: 'Today I Learned',
            href: '/today-i-learned'
        }
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
            text: 'TikTok',
            href: 'https://www.tiktok.com/@christina.codes'
        },
        {
            text: 'YouTube',
            href: 'https://www.youtube.com/@ChristinaCodes'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/christina-de-martinez'
        },
        {
            text: 'Bluesky',
            href: 'https://bsky.app/profile/christinacodes.dev'
        }
    ],
    hero: {
        // title: 'Hi There & Welcome to My Corner of the Web!',
        text: 'I\'m **Christina Martinez**, a Sacramento-based software engineer. I have a business degree and a background in marketing & project management. I learned to code on nights and weekends before switching over full-time to software development.<br /><br />I started my dev career on a fully-remote front-end MarTech team before becoming the team lead. I led a team of 4 devs remotely, internationally, and across time zones. Then I switched to a product team, shipping beloved features to hundreds of thousands of users.<br /><br />For fun, I like to share <a href="https://www.instagram.com/christina.codes/" target="_blank" rel="noopener noreferrer">my silly side projects</a> with my 8,000+ followers on social media. Check out my <a href="https://www.instagram.com/reel/Cxvwz76vBus/" target="_blank" rel="noopener noreferrer">viral Gen Z slang Babel plugin</a>, my <a href="https://github.com/christina-de-martinez/swift-commits" target="_blank" rel="noopener noreferrer">Taylor Swift command line tool</a>, and my <a href="https://youtube.com/shorts/RLpL2XtsT1I?si=VOK2lpPmkSKEaWiQ" target="_blank" rel="noopener noreferrer">award-winning Worst Video Player</a>.',
        image: {
            src: '/hero.jpg',
            alt: 'Christina standing at a balcony overlooking the Mediterranean'
        },
        actions: [
            {
                text: 'Follow Me on GitHub',
                href: 'https://github.com/christina-de-martinez'
            },
            {
                text: 'Find me on Bluesky',
                href: 'https://bsky.app/profile/christinacodes.dev'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
