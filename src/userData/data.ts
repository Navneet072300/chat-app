// user.ts
import { faker } from "@faker-js/faker";

export interface User {
  userId: string;
  username: string;

  avatar: string;
}

export function createRandomUser(): User {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),

    avatar: faker.image.avatar(),
  };
}

export const data: User[] = faker.helpers.multiple(createRandomUser, {
  count: 20,
});
