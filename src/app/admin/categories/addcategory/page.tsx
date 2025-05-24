"use client"
import type { ReactNode } from "react"
import { redirect } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Plus, FileText, Tag } from "lucide-react"



export default function addCategory(): ReactNode {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => redirect("/admin/categories")}
            className="mb-4 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Categories
          </Button>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Create New Category
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Organize your content with a new category
            </p>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="max-w-2xl mx-auto">
          <form
            action="/api/category"
            method="POST"
            className="space-y-8"
          >
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardHeader className="space-y-4 pb-8">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Plus className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900 dark:text-slate-100">
                      Category Details
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      Fill in the information below to create your category
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Category Name Field */}
                <div className="space-y-3">
                  <Label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <Tag className="h-4 w-4" />
                    Category Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="e.g., Technology, Design, Marketing"
                    className="h-12 text-base border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  />
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Choose a clear, descriptive name for your category
                  </p>
                </div>

                {/* Description Field */}
                <div className="space-y-3">
                  <Label htmlFor="description" className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                    <FileText className="h-4 w-4" />
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    placeholder="Describe what this category will contain and how it will be used..."
                    className="min-h-[120px] text-base border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors resize-none"
                  />
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Provide a detailed description to help others understand this category
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => redirect("/admin/categories")}
                    className="flex-1 sm:flex-none h-12 px-8 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 sm:flex-none h-12 px-8 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors shadow-lg"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Category
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>

          {/* Additional Info Card */}
          <Card className="mt-6 border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded">
                  <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    Category Guidelines
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Categories help organize your content effectively. Choose names that are clear and specific, and
                    write descriptions that explain the purpose and scope of the category.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 