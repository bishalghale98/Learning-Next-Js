import React from "react";
import CategoryClient from "./CategoryClient";
import { metadata } from "@/app/layout";

metadata.title = "Bishal Ghale | Admin | Categories";
metadata.description = "Manage categories for your content here.";

const Category = () => {
  return (
    <>
      <CategoryClient />
    </>
  );
};

export default Category;
