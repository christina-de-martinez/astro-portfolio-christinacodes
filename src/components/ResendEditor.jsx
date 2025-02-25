import StarterKit from '@tiptap/starter-kit';
import FontFamily from '@tiptap/extension-font-family';
import FloatingMenu from '@tiptap/extension-floating-menu';
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { EditorContent, useEditor } from '@tiptap/react';

export default () => {
    const defaultHtml = `<h1>Christina Martinez</h1>
    <p>Software engineer with a background in digital marketing and project management.</p>
    <p><em><span style="color: #958DF1">This is interactive! Try typing, adding a new line, etc.</span></em></p>
    <h2>Experience</h2>
    <h3>Software Engineer, Logos Bible Software - Jan 2022&ndash;Present</h3>
    <p>Some stuff</p>
    <h3>Team Lead, Web Development, Logos Bible Software - Jan 2020&ndash;Aug 2022</h3>
    <p>Some stuff</p>
    <h3>Web Developer, Logos Bible Software - Jan 2020&ndash;Aug 2022</h3>
    <p>Some stuff</p>
    <h3>Marketing Project Coordinator, Logos Bible Software - Jun 2017&ndash;Jan 2020</h3>
    <p>Some stuff</p>
    <h2>Main Tech Stack</h2>
    <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>Draft.js/Slate.js</li>
    </ul>
    <h3>Some familiarity with</h3>
    <ul>
        <li>C#</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>SQL</li>
        <li>Azure</li>
    </ul>
    <h2>Education</h2>
    <h3>Biola University, 2013-2017</h3>
    <p>Bachelor of Science in International Business</p>
    <h2>Languages</h2>
    <ul>
        <li>English: native speaker</li>
        <li>Spanish: limited professional working proficiency</li>
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
            FloatingMenu,
            Color,
            TextStyle,
            FontFamily
        ],
        content: defaultHtml,
        autofocus: true,
        editable: true
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
