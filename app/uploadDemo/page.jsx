"use client";

import VdoUp from "@/components/VdoUp";
import React from "react";

const UploadDemo = async () => {
  return (
    <div className="h-screen w-[calc(100vw-8px)] flex flex-col  items-center gap-4 pt-24">
      <VdoUp />
    </div>
  );
};

export default UploadDemo;
