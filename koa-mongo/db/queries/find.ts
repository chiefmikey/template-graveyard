import { User, Post } from '../index';

export const findUser = async (input: string) => {
  try {
    const result = await User.find({
      input,
    });
    return JSON.stringify(result);
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const findPost = async (input: string) => {
  try {
    const result = await Post.find({
      input,
    });
    return JSON.stringify(result);
  } catch (error) {
    console.error(error);
    return error;
  }
};
