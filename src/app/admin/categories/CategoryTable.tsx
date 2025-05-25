"use client";

import { Button } from "@/components/ui/button";
import { ICategory } from "@/store/category/types";
import { MoreVertical, PenSquare, Trash2 } from "lucide-react";
import React from "react";

const CategoryTable = ({ categories }: any) => {


  return (
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
        {categories?.map((category: any) => (
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
                <Button variant="ghost" size="icon" className="rounded-full">
                  <PenSquare className="w-5 h-5 text-indigo-500" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
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
  );
};

export default CategoryTable;
