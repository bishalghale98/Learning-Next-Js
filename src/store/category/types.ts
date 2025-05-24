interface ICategory {
  createdAt: string;
  description: string;
  name: string;
  _id: string;
}

interface ICategoryInitialState {
  categories: ICategory[];
  loading: boolean;
  success: boolean;
  error: string | null;
}
export type { ICategoryInitialState };
