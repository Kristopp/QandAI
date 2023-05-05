//Create me TRPC end point for taking in user input as a string and save it to the database and return messgae to the user.

import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export interface UserPostWithVoteCount {
    id: string;
    user: {
        name: string;
    };
    createdAt: Date;
    updatedAt: Date;
    content: string;
    userId: string;
    _count: {
        votes: number;
    };
}

export interface GetAllUsersPostsResponse {
    responseMessage: string;
    usersAllMessage: UserPostWithVoteCount[];
}


export const postRouter = createTRPCRouter({
    getUsersLatestInput: protectedProcedure.input(z.object({ userId: z.string() }))
        .query(async ({ input, ctx }) => {
            const { userId } = input;
            console.log('userId', userId)
            try {
                const latestMessage = await ctx.prisma.userPost.findFirst({
                    where: {
                        userId: userId,
                    },
                    orderBy: { createdAt: 'desc' },
                    take: 1,
                });
                console.log('latestMessage', latestMessage);
                return {
                    responseMessage: "Users latest input fetched",
                    latestMessage: latestMessage
                };
            } catch (error) {
                console.log(error);
            }

        }),

        getAllUsersPosts: protectedProcedure
        .query(async ({ ctx }): Promise<GetAllUsersPostsResponse> => {
            try {
                const usersAllMessages: UserPostWithVoteCount[] = await ctx.prisma.userPost.findMany({
                    where: {
                        user: {
                            name: {
                                not: undefined // Filter out users with no name
                            },
                        },
                    },
                    orderBy: { votes: { _count: 'desc' } }, // Order by votes count
                    include: {
                        user: {
                            select: {
                                name: true,
                            },
                        },
                        _count: {
                            select: { votes: true },
                        },
                        //Todo: modify it to get the one post only 
                        
                    },
                });
    
    
                const usersAllMessagesWithVoteCount: UserPostWithVoteCount[] = usersAllMessages.map((post) => ({
                    id: post.id,
                    user: {
                        name: post.user.name,
                    },
                    createdAt: post.createdAt,
                    updatedAt: post.updatedAt,
                    content: post.content,
                    userId: post.userId,
                    _count: post._count,
                }));
    
                return {
                    responseMessage: "All user inputs fetched",
                    usersAllMessage: usersAllMessagesWithVoteCount
                };
            } catch (error) {
                return {
                    responseMessage: "Error fetching user inputs",
                    usersAllMessage: [],
                };
            }
        }),
    

    createUserInput: protectedProcedure
        .input(z.object({ content: z.string() }))
        .mutation(async ({ input, ctx }) => {
            const { content } = input;
            const userId = ctx.session.user.id;

            console.log('userId', userId, input)

            try {
                const userInput = await ctx.prisma.userPost.create({
                    data: {
                        content: content,
                        userId: userId,
                    },
                    include: {
                        user: {
                            select: {
                                name: true,
                            },
                        },
                    },
                });
                console.log('userInput', userInput);
                return {
                    message: "User input created",
                    userInput
                };
            }
            catch (error) {
                console.log(error);
            }
        }),
    //Create and endpoint to vote for a user input and return the updated vote count

    voteForUserPost: protectedProcedure
        .input(z.object({ postId: z.string() }))
        .mutation(async ({ input, ctx }) => {
            const { postId } = input;
            const userId = ctx.session.user.id;
            console.log('userId inside endpoint', userId ,postId)

            try {
                const userInput = await ctx.prisma.userPost.update({
                    where: {
                        id: postId,
                    },
                    data: {
                        votes: {
                            create: {
                                userId: userId,
                            },
                        },
                    },
                });
                console.log('userInput', userInput);
                return {
                    message: "User input voted for",
                    userInput
                };
            }
            catch (error) {
                console.log(error);
            }
        }),

});