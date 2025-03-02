import { useCallback } from 'react';
import StarterKit from '@tiptap/starter-kit';
import FontFamily from '@tiptap/extension-font-family';
import FloatingMenu from '@tiptap/extension-floating-menu';
import TextStyle from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import { Color } from '@tiptap/extension-color';
import { EditorContent, useEditor } from '@tiptap/react';
import { actions } from 'astro:actions';
import DropdownSelect from './DropdownSelect';
import { defaultResendHtml } from '../utils/defaultResendHtml';
import { fontColors, fontFaces } from '../utils/resendData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faHighlighter, faItalic, faListUl, faStrikethrough } from '@fortawesome/free-solid-svg-icons';

const ResendEditor = () => {
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
            FloatingMenu,
            Color,
            TextStyle,
            FontFamily,
            Highlight.configure({ multicolor: true })
        ],
        content: defaultResendHtml,
        autofocus: true,
        editable: true,
        immediatelyRender: false
    });

    const buttonClasses = `inline-flex items-center justify-center px-6 py-2 mx-1 font-serif leading-tight italic text-main bg-main border border-main rounded-full transition hover:bg-muted`;

    const handleColorChange = useCallback(
        (color) => {
            if (!editor) return;

            const colorName = color.name.toLowerCase();

            let colors = {
                default: '#f1f1f1',
                purple: '#9333ea',
                red: '#d80000',
                yellow: '#eab308',
                blue: '#2563eb',
                green: '#008a00',
                orange: '#ffa500',
                pink: '#ba4081',
                gray: '#a8a29e'
            };
            const colorHex = colors[colorName] ?? '#f1f1f1';
            editor.chain().focus().setColor(colorHex).run();
        },
        [editor]
    );

    const handleFontChange = useCallback(
        (font) => {
            if (!editor) return;
            editor.chain().focus().setFontFamily(font.name).run();
        },
        [editor]
    );

    return !editor ? (
        <div className="w-full text-center">
            <h1>Loading...</h1>
        </div>
    ) : (
        <article className="mb-16 sm:mb-24">
            <form action={actions.send} id="emailForm" className="w-full">
                <div className="w-full flex flex-col md:flex-row gap-4 items-center md:items-end justify-stretch mb-16">
                    <div className="flex flex-col gap-2 w-full md:w-[70%]">
                        <label htmlFor="email" className="text-xs text-main/60">
                            Your email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="h-9 px-5 py-2 text-sm text-main bg-transparent border border-main rounded-md placeholder:text-main/60 focus:outline-none w-full max-w-xl"
                            required=""
                            placeholder="christina@resend.com"
                        />
                        <input type="hidden" name="html" id="html" value={editor.getHTML() ?? defaultResendHtml} />
                    </div>
                    <button
                        type="submit"
                        name="subscribe"
                        className="w-full h-9 sm:w-auto inline-flex items-center justify-center px-6 py-2 font-serif leading-tight italic text-main bg-main border border-main rounded-full transition hover:bg-muted"
                    >
                        Send me a copy
                    </button>
                </div>
            </form>
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            <div className="control-group flex flex-row flex-wrap gap-4 items-center justify-center">
                <div className="button-group ">
                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={`${editor.isActive('bold') ? 'bg-stone-700' : ''} ${buttonClasses}`}
                    >
                        <FontAwesomeIcon icon={faBold} />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={`${editor.isActive('italic') ? 'bg-stone-700' : ''} ${buttonClasses}`}
                    >
                        <FontAwesomeIcon icon={faItalic} />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        className={`${editor.isActive('strike') ? 'bg-stone-700' : ''} ${buttonClasses}`}
                    >
                        <FontAwesomeIcon icon={faStrikethrough} />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={`${editor.isActive('bulletList') ? 'bg-stone-700' : ''} ${buttonClasses}`}
                    >
                        <FontAwesomeIcon icon={faListUl} />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHighlight({ color: '#958df1' }).run()}
                        className={`${editor.isActive('highlight') ? 'bg-stone-700' : ''} ${buttonClasses}`}
                    >
                        <FontAwesomeIcon icon={faHighlighter} />
                    </button>
                </div>
                <DropdownSelect onDataChange={handleColorChange} data={fontColors} showIcon />
                <DropdownSelect onDataChange={handleFontChange} data={fontFaces} />
            </div>
            <EditorContent editor={editor} />
        </article>
    );
};

export default ResendEditor;
