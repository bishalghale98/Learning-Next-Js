"use client";

import LoadingScreen from "@/components/custom/loading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getAllCategories } from "@/store/category/categoryAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import CategoryTable from "./CategoryTable";
import { toast } from "sonner";
import { categoryActions } from "@/store/category/categorySlice";

const CategoryClient = () => {
  const dispatch = useAppDispatch();
  const { categories, loading, error, success, meta } = useAppSelector(
    (state) => state.category
  );

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error("Failed to load categories. Please try again later.");
      dispatch(categoryActions.resetCategoryState()); // reset error state
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      toast.success("Categories loaded successfully!");
      dispatch(categoryActions.resetCategoryState()); // reset success flag
    }
  }, [success]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingScreen />
      </div>
    );
  }


  const addCategoryRoute = "/admin/categories/addcategory";

  return (
    <div className="flex flex-col px-2 sm:px-4 md:px-6 lg:px-8 py-4">
      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          {/* Search input */}
          <div className="mb-4 flex items-center justify-between">
            <div className="relative text-gray-500 focus-within:text-gray-900 mb-4 w-full max-w-md">
              <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <Input
                type="text"
                className="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search for category"
              />
            </div>
            <Link href={addCategoryRoute}>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform">
                Add Category
              </Button>
            </Link>
          </div>

          {/* Responsive Table */}
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto rounded-xl">
                {categories.length > 0 ? (
                  <CategoryTable categories={categories} />
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    No categories found.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CategoryClient;
