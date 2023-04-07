//Create me TRPC end point for taking in user input as a string and save it to the database and return messgae to the user.

import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { prisma } from "~/server/db";

export const inputRouter = createTRPCRouter({
    getUserInputs: protectedProcedure
        .input(z.object({ userId: z.string() }))
        .query(async ({ input, ctx }) => {
            const { userId } = input;

            try {
                const userInputs = await prisma.userInput.findMany({
                    where: { userId },
                    orderBy: { createdAt: 'desc' },
                });

                return userInputs;
            } catch (error) {
                throw error;
            }
        }),

    createUserInput: protectedProcedure
        .input(z.object({ content: z.string() }))
        .mutation(async ({ input, ctx }) => {
            const { content } = input;
            const userId = ctx.session.user.id;

            try {
                const userInput = await prisma.userInput.create({
                    data: {
                        content,
                        user: {
                            connect: { id: userId },
                        },
                    },
                });

                return userInput;
            } catch (error) {
                throw error;
            }
        }),
});