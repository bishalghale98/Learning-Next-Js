"use client";
import { redirect, useParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Plus, FileText, Tag } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  getCategoryById,
  updateCategory,
} from "@/store/category/categoryAction";
import { useEffect } from "react";

const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
});

type FormData = z.infer<typeof formSchema>;

import { LoadingSpinner, Spinner } from "@/components/Spinner";
import {
  resetFetchedState,
  resetSingleCategory,
  resetUpdateCategory,
} from "@/store/category/categorySlice";

import { toast, ToastOptions, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientPage = () => {
  const dispatch = useAppDispatch();


  const {
    updatedCategory,
    loadingUpdate,
    successUpdate,
    loadingSingle,
    singleCategory: category,
  } = useAppSelector((state) => state.category);

  const { id: categoryId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  function submitForm(data: FormData) {
    dispatch(updateCategory({ id: String(categoryId), data })).then(() =>
      dispatch(resetFetchedState())
    );
  }

  useEffect(() => {
    dispatch(resetUpdateCategory());
  }, []);

  useEffect(() => {
    dispatch(getCategoryById(String(categoryId)));
    return () => {
      dispatch(resetSingleCategory());
    };
  }, [dispatch, categoryId]);

  useEffect(() => {
    if (category || categoryId) {
      reset({
        name: category?.name || "",
        description: category?.description || "",
      });
    }
  }, [category, reset, categoryId]);

  const handleSuccess = () => {
    const options: ToastOptions = {
      autoClose: 3000,
      onClose: () => {
        dispatch(resetUpdateCategory());
        redirect(back);
      },
    };

    toast.success("Category updated successfully", options);
  };

  useEffect(() => {
    if (successUpdate === true) {
      handleSuccess();
    }
  }, [successUpdate]);

  const back = "/admin/categories";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => redirect(back)}
            className="mb-4 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Categories
          </Button>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Update Category
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Make changes to your existing category details
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(submitForm)} className="space-y-8">
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader className="space-y-4 pb-8">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <Tag className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                      Category Details
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      Modify the information below to update your category
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              {loadingSingle ? (
                <LoadingSpinner />
              ) : (
                <CardContent className="space-y-8">
                  <div className="space-y-3">
                    <Label
                      htmlFor="name"
                      className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      <Tag className="h-4 w-4" />
                      Category Name
                    </Label>
                    <Input
                      {...register("name")}
                      id="name"
                      name="name"
                      required
                      placeholder="e.g., Technology, Design, Marketing"
                      className="h-12 text-base border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                    />
                    {errors.name?.message && (
                      <p className="text-sm text-red-500">
                        {String(errors.name.message)}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="description"
                      className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      <FileText className="h-4 w-4" />
                      Description
                    </Label>
                    <Textarea
                      {...register("description")}
                      id="description"
                      name="description"
                      required
                      placeholder="Describe what this category will contain..."
                      className="min-h-[120px] text-base border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
                    />
                    {errors.description?.message && (
                      <p className="text-sm text-red-500">
                        {String(errors.description.message)}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => redirect(back)}
                      className="flex-1 sm:flex-none h-12 px-8 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 sm:flex-none h-12 px-8 bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 transition-colors shadow-lg"
                    >
                      {loadingUpdate ? (
                        <Spinner />
                      ) : (
                        <Tag className="h-4 w-4" />
                      )}{" "}
                      {loadingUpdate ? "Updating..." : "Update Category"}
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default ClientPage;
