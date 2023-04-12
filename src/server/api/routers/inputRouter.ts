//Create me TRPC end point for taking in user input as a string and save it to the database and return messgae to the user.

import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";


export const inputRouter = createTRPCRouter({
    getUsersLatestInput: protectedProcedure.input(z.object({ userId: z.string() }))
        .query(async ({ input, ctx }) => {
            const { userId } = input;
            try {
                const latestMessage = await ctx.prisma.userInput.findFirst({
                    where: {
                        userId: userId,
                    },
                    orderBy: { createdAt: 'desc' },
                    take: 1,
                });
                return {
                    responseMessage: "Users latest input fetched",
                    latestMessage: latestMessage
                };
            } catch (error) {
                console.log(error);
            }

        }),
    getUserInputs: protectedProcedure
        .input(z.object({ userId: z.string() }))
        .query(async ({ input, ctx }) => {
            const { userId } = input;
            try {
                const UsersAllMessages = await ctx.prisma.userInput.findMany({
                    where: {
                        userId: userId,
                    },
                    orderBy: { createdAt: 'desc' },
                });
                return {
                    responseMessage: "User inputs fetched",
                    usersAllMessage: UsersAllMessages
                };
            } catch (error) {
                console.log(error);
            }

        }),

    createUserInput: protectedProcedure
        .input(z.object({ content: z.string() }))
        .mutation(async ({ input, ctx }) => {
            const { content } = input;
            const userId = ctx.session.user.id;

            try {
                const userInput = await ctx.prisma.userInput.create({
                    data: {
                        content,
                        userId,
                    },
                }).catch((error) => {
                    console.log(error);
                }).then((data) => {
                    console.log('data', data);
                });
                return {
                    message: "User input created",
                    userInput
                };
            }
            catch (error) {
                console.log(error);
            }
        }),
});