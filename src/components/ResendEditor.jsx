import StarterKit from '@tiptap/starter-kit';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import FontFamily from '@tiptap/extension-font-family';
import FloatingMenu from '@tiptap/extension-floating-menu';
import TextStyle from '@tiptap/extension-text-style';
import Link from '@tiptap/extension-link';
import { Color } from '@tiptap/extension-color';
import { EditorContent, useEditor } from '@tiptap/react';

export default () => {
    const defaultHtml = `<h1>Christina Martinez</h1>
    <p>Software engineer with a background in digital marketing and project management.</p>
    <p><em><span style="color: #958DF1">This is interactive! Try typing, changing fonts or colors, adding a new line, etc.</span></em></p>
    <hr />
    <h2>Tech Stack</h2>
    <p><strong>Main tech stack:</strong> JavaScript, React, TypeScript, Node.js, Draft.js/Slate.js</p>
    <p><strong>Some familiarity with:</strong> C#, MongoDB, Express, SQL, Azure</p>
    <h2>Experience</h2>
    <h3>Software Engineer, Logos Bible Software - Jan 2022&ndash;Present</h3>
    <ul>
        <li>Maintained a <a href="https://support.logos.com/hc/en-us/articles/360016747391-Writing-Sermons-Using-Sermon-Builder" target="_blank" rel="noopener noreferrer">text editor</a> written in Draft.js that is used by hundreds of thousands of customers.</li>
        <li>Rewrote the entire editor in Slate.js with 4 teammates, improving performance and maintainability.</li>
        <li>Designed and built a C# API endpoint and wrote React UI for a major AI-based feature release.</li>
    </ul>
    <h3>Team Lead, Web Development, Logos Bible Software - Jan 2020&ndash;Aug 2022</h3>
    <ul>
        <li>Led a full-remote, international team across multiple time zones.</li>
        <li>Streamlined development processes by moving the team to an efficient scrumban setup.</li>
        <li>Rehabilitated a struggling team member, who is now a happy and productive member of the team.</li>
    </ul>
    <h3>Web Developer, Logos Bible Software - Jan 2020&ndash;Aug 2022</h3>
    <ul>
        <li>Created several custom landing pages each week using vanilla HTML, CSS, and JavaScript, to match rigorous brand guidelines and stand up to stakeholder review. </li>
        <li>Built reusable design components into company style guides and coordinated project to update over 600 landing pages with new style guidelines, all of which went live smoothly and reliably on one given launch morning.</li>
        <li>Rebuilt a gamified survey-based React app from scratch with a coworker, which brings in over $1 million annually for the company’s main product line.</li>
    </ul>
    <h3>Marketing Project Coordinator, Logos Bible Software - Jun 2017&ndash;Jan 2020</h3>
    <ul>
        <li>Coordinated large and complex projects and promotions, including a $1.5 million+ bracket competition in March 2018.</li>
        <li>Doubled the revenue of the in-app messaging channel in under two years, from $850,000 in 2017 to over $1.7 million in 2019. </li>
        <li>Wrote and presented marketing project briefs, planned projects, and worked with others to ensure that they stayed under budget and on time.</li>
    </ul>
    <h2>Education</h2>
    <h3>Biola University, 2013-2017</h3>
    <p>Bachelor of Science in <a href="https://www.biola.edu/degrees/u/business-administration-bs" target="_blank" rel="noopener noreferrer">International Business</a></p>
    <p><a href="https://www.biola.edu/torrey" target="_blank" rel="noopener noreferrer">Torrey Honors Institute</a> perpetual member</p>
    <h2>Languages</h2>
    <ul>
        <li><strong>English:</strong> native speaker</li>
        <li><strong>Spanish:</strong> limited professional working proficiency (C1)</li>
    </ul>`;

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3, 4, 5, 6],
                    HTMLAttributes: {
                        class: 'heading'
                    }
                }
            }),
            Link.configure({
                openOnClick: true,
                autolink: true,
                defaultProtocol: 'https',
                protocols: ['http', 'https'],
                isAllowedUri: (url, ctx) => {
                    try {
                        // construct URL
                        const parsedUrl = url.includes(':') ? new URL(url) : new URL(`${ctx.defaultProtocol}://${url}`);

                        // use default validation
                        if (!ctx.defaultValidate(parsedUrl.href)) {
                            return false;
                        }

                        // disallowed protocols
                        const disallowedProtocols = ['ftp', 'file', 'mailto'];
                        const protocol = parsedUrl.protocol.replace(':', '');

                        if (disallowedProtocols.includes(protocol)) {
                            return false;
                        }

                        // only allow protocols specified in ctx.protocols
                        const allowedProtocols = ctx.protocols.map((p) => (typeof p === 'string' ? p : p.scheme));

                        if (!allowedProtocols.includes(protocol)) {
                            return false;
                        }

                        // disallowed domains
                        const disallowedDomains = ['example-phishing.com', 'malicious-site.net'];
                        const domain = parsedUrl.hostname;

                        if (disallowedDomains.includes(domain)) {
                            return false;
                        }

                        // all checks have passed
                        return true;
                    } catch {
                        return false;
                    }
                },
                shouldAutoLink: (url) => {
                    try {
                        // construct URL
                        const parsedUrl = url.includes(':') ? new URL(url) : new URL(`https://${url}`);

                        // only auto-link if the domain is not in the disallowed list
                        const disallowedDomains = ['example-no-autolink.com', 'another-no-autolink.com'];
                        const domain = parsedUrl.hostname;

                        return !disallowedDomains.includes(domain);
                    } catch {
                        return false;
                    }
                }
            }),
            BulletList,
            ListItem,
            FloatingMenu,
            Color,
            TextStyle,
            FontFamily
        ],
        content: defaultHtml,
        autofocus: true,
        editable: true,
        immediatelyRender: false
    });

    if (!editor) {
        return null;
    }

    const buttonClasses = `inline-flex items-center justify-center px-6 py-2 mx-1 font-serif leading-tight italic text-main bg-main border border-main rounded-full transition hover:bg-muted`;

    return (
        <article className="mb-16 sm:mb-24">
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            <div className="control-group">
                <div className="button-group ">
                    <button
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={`${editor.isActive('bulletList') ? 'is-active' : ''} ${buttonClasses}`}
                    >
                        Toggle bullet list
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setFontFamily('Inter').run()}
                        className={`${editor.isActive('textStyle', { fontFamily: 'Inter' }) ? 'is-active' : ''} ${buttonClasses}`}
                        data-test-id="inter"
                    >
                        Inter
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setFontFamily('serif').run()}
                        className={`${editor.isActive('textStyle', { fontFamily: 'serif' }) ? 'is-active' : ''} ${buttonClasses}`}
                        data-test-id="serif"
                    >
                        Serif
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setFontFamily('monospace').run()}
                        className={`${editor.isActive('textStyle', { fontFamily: 'monospace' }) ? 'is-active' : ''} ${buttonClasses}`}
                        data-test-id="monospace"
                    >
                        Monospace
                    </button>
                    <button
                        onClick={() => editor.chain().focus().setFontFamily('"Exo 2"').run()}
                        className={`${editor.isActive('textStyle', { fontFamily: 'Exo 2' }) ? 'is-active' : ''} ${buttonClasses}`}
                        data-test-id="exo2"
                    >
                        Exo 2
                    </button>
                </div>
            </div>
            <EditorContent editor={editor} />
        </article>
    );
};
