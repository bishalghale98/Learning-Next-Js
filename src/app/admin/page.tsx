import React from "react";
import Client from "./client";
import { metadata } from "../layout";

metadata.title = "Bishal Ghale | Admin";
metadata.description = "Manage your content and settings here.";

const page = () => {
  return (
    <>
      <Client />
    </>
  );
};

export default page;
