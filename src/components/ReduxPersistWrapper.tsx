// components/ReduxPersistWrapper.tsx
"use client";

import { persistor } from "@/store/store";
import { ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";

const ReduxPersistWrapper = ({ children }: { children: ReactNode }) => {
  return <PersistGate loading={null} persistor={persistor}>{children}</PersistGate>;
};

export default ReduxPersistWrapper;
