import { Cat } from '../../models/Cat';

export const resolvers = {
  Query: {
    hello: () => "hello world",
    getCats: async () => {
      const res = Cat.find();

      return res;
    },
    getSomeCats: async (_parent, { name }) => {
      console.log(name)
      const someCats = Cat.find({ name: name });
      
      return someCats;
    }
  },
  Mutation: {
    createCat: async (_parent, { name }) => {
      const kitty = new Cat({ name: name.toLowerCase() });
      await kitty.save();

      return kitty;
    },
    deleteCats: async (_parent, { name }) => {
      await Cat.deleteMany({ name });

      return `Deleted ${name}`
    }
  }
}

