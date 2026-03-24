type userData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  avatar: string;
};
type QueryData<T> = {
  success: boolean;
  message: string;
  data: T | null;
};
type QueryFn<T> = () => Promise<QueryData<T>>;
type postData = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    dislikes: number;
    likes: number;
  };
  views: number;
};
type CreatePostData = Omit<postData, "id"> & { userId: number };
export type { userData, QueryData, QueryFn, postData, CreatePostData };
