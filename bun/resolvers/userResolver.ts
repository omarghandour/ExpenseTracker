import { users } from "../dummyData/data";
const userResolver = {
  Query: {
    users: () => {
      return users;
    },
    user: (_: any, userId: { id: string }) => {
      return users.find((user) => user._id === userId.id);
    },
  },
  Mutation: {},
};

export default userResolver;
