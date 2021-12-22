import { User, Post } from '../index';

export const saveUser = async (input1: string) => {
  try {
    const result = (await new User({
      input1,
    })) as { save: () => Promise<void> };
    await result.save();
    return 'Saved';
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const savePost = async (input1: string) => {
  try {
    const result = (await new Post({
      input1,
    })) as { save: () => Promise<void> };
    await result.save();
    return 'Saved';
  } catch (error) {
    console.error(error);
    return error;
  }
};
