import { ActionError, defineAction } from 'astro:actions';

import { Resend } from 'resend';
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    send: defineAction({
        accept: 'form',
        handler: async (formData) => {
            const recipient = formData.get('email')?.toString() ?? 'christina.m.codes@gmail.com';
            const emailHtml = formData.get('html')?.toString() ?? '';

            const { data, error } = await resend.emails.send({
                from: 'Christina <hi@updates.christinacodes.dev>',
                to: [recipient],
                subject: 'Christina Martinez - Software Engineer',
                replyTo: 'Christina <christina@algoagency.dev>',
                html: emailHtml
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
