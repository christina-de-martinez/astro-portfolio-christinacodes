import { ActionError, defineAction } from 'astro:actions';

import { Resend } from 'resend';
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    send: defineAction({
        accept: 'form',
        handler: async (formData) => {
            const recipient = formData.get('email')?.toString() ?? 'christina.m.codes@gmail.com';

            const html = `<h1>Christina Martinez</h1>
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

            const { data, error } = await resend.emails.send({
                from: 'Christina <hi@updates.christinacodes.dev>',
                to: [recipient],
                subject: 'Christina Martinez - Software Engineer',
                html: html
            });

            if (error) {
                throw new ActionError({
                    code: 'BAD_REQUEST',
                    message: error.message
                });
            }

            return data;
        }
    })
};
