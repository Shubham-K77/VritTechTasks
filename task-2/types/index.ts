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

export type { userData, QueryData, QueryFn };
