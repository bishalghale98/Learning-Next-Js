import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MoreVertical, PenSquare, Search, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Category = async () => {

  const categories = [
    {
      _id: "1",
      name: "Technology",
      description: "All about tech",
      createdAt: "2023-10-01T12:00:00Z"
    },
    {
      _id: "2",
      name: "Health",
      description: "Health and wellness topics",
      createdAt: "2023-10-02T12:00:00Z"
    },
    {
      _id: "3",
      name: "Finance",
      description: "Financial advice and tips",
      createdAt: "2023-10-03T12:00:00Z"
    }
  ]

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
                id="company-search"
                className="block w-full h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search for company"
              />
            </div>

            <Link href="categories/addcategory">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform ">
                Add Category
              </Button>
            </Link>
          </div>

          {/* Responsive Table */}
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto rounded-xl">
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
                    {categories?.map((category) => (
                      <tr
                        key={category._id}
                        className="transition hover:bg-gray-50"
                      >
                        <td className="p-4 whitespace-nowrap text-sm text-gray-900">
                          {category.name}
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm text-gray-900">
                          {category._id}
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm text-gray-900">
                          {/* Replace with actual type if available */}
                          {new Date(category.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm text-gray-900">
                          {category.description}
                        </td>
                        <td className="p-4 whitespace-nowrap">
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full"
                            >
                              <PenSquare className="w-5 h-5 text-indigo-500" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full"
                            >
                              <Trash2 className="w-5 h-5 text-red-600" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full"
                            >
                              <MoreVertical className="w-5 h-5" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Category;
