"use client";
import dynamic from "next/dynamic";
import React from "react";

interface Props {
  blocks: any;
}

export default function ClientRenderer({ blocks }: Props) {
  const NotionRendererNoSSR = dynamic(
    () => import("react-notion-x").then((mod) => mod.NotionRenderer),
    {
      ssr: false,
    }
  );

  return <NotionRendererNoSSR recordMap={blocks} defaultPageCover="true" />;
  // return <NotionRendererNoSSR blockMap={blocks} />;
}
