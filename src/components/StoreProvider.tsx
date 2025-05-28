"use client";

import { AppStore, stores } from "@/store/store";
import React, { useRef } from "react";
import { Provider } from "react-redux";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = stores();
  }

  return <Provider store={storeRef.current} >{children}</Provider>;
};

export default StoreProvider;
