import type { UserPostWithVoteCount } from "~/server/api/routers/inputRouter";
import { faker } from '@faker-js/faker';

export const mockPostData: UserPostWithVoteCount[] = [
    {
      id: 'user1',
      user: {
        name: 'Alice',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      content: faker.lorem.paragraphs(3),
      userId: '1',
      _count: {
        votes: 5,
      },
    },
    {
      id: 'user2',
      user: {
        name: 'Bob',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      content: 'This is a mock post from Bob',
      userId: '2',
      _count: {
        votes: 3,
      },
    },
    {
      id: 'user3',
      user: {
        name: 'Charlie',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      content: faker.lorem.paragraphs(2),
      userId: '3',
      _count: {
        votes: 7,
      },
    },
    {
      id: 'user4',
      user: {
        name: 'David',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      content: faker.lorem.paragraphs(1),
      userId: '4',
      _count: {
        votes: 1,
      },
    },
    {
      id: 'user5',
      user: {
        name: 'Eva',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      content: faker.lorem.paragraphs(2),
      userId: '5',
      _count: {
        votes: 4,
      },
    },
    {
      id: 'user6',
      user: {
        name: 'Frank',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      content: 'This is a mock post from Frank',
      userId: '6',
      _count: {
        votes: 2,
      },
    },
    {
        id: 'user7',
        user: {
          name: 'Grace',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        content: faker.lorem.paragraphs(5),
        userId: '7',
        _count: {
          votes: 8,
        },
      },
      {
        id: 'user8',
        user: {
          name: 'Henry',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        content: faker.lorem.paragraphs(2),
        userId: '8',
        _count: {
          votes: 6,
        },
      },
      {
        id: 'user9',
        user: {
          name: 'Iris',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        content: faker.lorem.paragraphs(3),
        userId: '9',
        _count: {
          votes: 10,
        },
      },
      {
        id: 'user10',
        user: {
          name: 'Jack',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        content: 'This is a mock post from Jack',
        userId: '10',
        _count: {
          votes: 2,
        },
      },
      {
        id: 'user11',
        user: {
          name: 'Kate',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        content: 'This is a mock post from Kate',
        userId: '11',
        _count: {
          votes: 5,
        },
      },
      {
        id: 'user12',
        user: {
          name: 'Luke',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        content: 'This is a mock post from Luke',
        userId: '12',
        _count: {
          votes: 9,
        },
      },
  ];