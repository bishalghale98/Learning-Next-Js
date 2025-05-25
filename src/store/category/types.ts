export interface ICategory {
  createdAt: string;
  description: string;
  name: string;
  _id: string;
}

interface IMeta {
  requestId: string;
  arg: any;
  requestStatus: string;
}

interface ICategoryInitialState {
  categories: ICategory[];
  loading: boolean;
  success: boolean;
  error: string | null;
  meta: IMeta;
}
export type { ICategoryInitialState };
