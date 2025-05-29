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

interface ICategoryError {
  message: string | null;
  statusCode: number | null;
}

interface ICategoryInitialState {
  categories: ICategory[];
  loading: boolean;
  successCreate: boolean;
  error: ICategoryError;
  meta: IMeta;
  hasFetched: boolean;
  addCategories: string | null; // to store newly added category
  successRemove: boolean;
  loadingRemove: boolean;
  loadingUpdate: boolean;
  successUpdate: boolean;
  updatedCategory: ICategory | null;
  successSingle: boolean;
  loadingSingle: boolean;
  singleCategory: ICategory | null;
}
export type { ICategoryInitialState };
