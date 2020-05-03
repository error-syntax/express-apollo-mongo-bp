import { Cat } from '../../models/Cat';

export const resolvers = {
  Query: {
    hello: () => "hello world",
    getCats: async (_parent, _args) => {
      const res = Cat.find();

      return res;
    }
  },
  Mutation: {
    createCat: async (_parent, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();

      return kitty;
    }
  }
}

