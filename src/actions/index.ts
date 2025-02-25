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

            const { data, error } = await resend.emails.send({
                from: 'Christina <hi@updates.christinacodes.dev>',
                to: [recipient],
                subject: 'Christina Martinez - Software Engineer',
                replyTo: 'Christina <christina@algoagency.dev>',
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
