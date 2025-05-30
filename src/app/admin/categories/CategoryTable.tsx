"use client";

import { Button } from "@/components/ui/button";
import { MoreVertical, PenSquare, Trash2 } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { removeCategory } from "@/store/category/categoryAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toast } from "sonner";
import { resetRemoveState } from "@/store/category/categorySlice";
import DeleteModel from "@/components/admin/category/DeleteModel";

const CategoryTable = ({ filterCategories }: any) => {
  const dispatch = useAppDispatch();
  const { successRemove, loadingRemove } = useAppSelector(
    (state) => state.category
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string>("");

  const deleteCat = (id: string) => {
    setSelectedId(id);
    setIsModalOpen(true);
    console.log("Create");
  };

  const confirmDelete = (id: string) => {
    if (id) {
      dispatch(removeCategory(id));
    }
  };

  useEffect(() => {
    if (successRemove) {
      toast.success("Category removed successfully");
      dispatch(resetRemoveState());
    }
  }, [successRemove, dispatch]);

  const editRoute = `/admin/categories/edit/`;

  return (
    <>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left text-xs sm:text-sm font-semibold text-gray-900">
              Category Name
            </th>
            <th className="p-4 text-left text-xs sm:text-sm font-semibold text-gray-900">
              Category ID
            </th>
            <th className="p-4 text-left text-xs sm:text-sm font-semibold text-gray-900">
              Created Date
            </th>
            <th className="p-4 text-left text-xs sm:text-sm font-semibold text-gray-900">
              Description
            </th>
            <th className="p-4 text-left text-xs sm:text-sm font-semibold text-gray-900">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filterCategories?.map((category: any) => (
            <tr key={category._id} className="transition hover:bg-gray-50">
              <td className="p-4 whitespace-nowrap text-sm text-gray-900">
                {category.name}
              </td>
              <td className="p-4 whitespace-nowrap text-sm text-gray-900">
                {category._id}
              </td>
              <td className="p-4 whitespace-nowrap text-sm text-gray-900">
                {new Date(category.createdAt).toLocaleDateString()}
              </td>
              <td className="p-4 whitespace-nowrap text-sm text-gray-900">
                {category.description}
              </td>
              <td className="p-4 whitespace-nowrap">
                <div className="flex items-center gap-1">
                  <Link
                    className="rounded-full"
                    href={`${editRoute}${category._id}`}
                  >
                    <PenSquare className="w-5 h-5 text-indigo-500" />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full cursor-pointer"
                    onClick={() => deleteCat(category._id)}
                  >
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Modal */}
      <DeleteModel
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        deleteId={selectedId} // ✅ Pass the selected ID
        title="Delete Category"
        message="Are you sure you want to delete this category? This action cannot be undone."
        confirmButtonText="Delete"
        cancelButtonText="Cancel"
        variant="destructive"
        loading={loadingRemove}
      />
    </>
  );
};

export default CategoryTable;
