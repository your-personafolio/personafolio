"use client";

import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

import type IImage from "@/features/images/core/types";
import GalleryTab from "@/features/product/components/gallery/gallery-tab";

const Gallery = ({ images }: { images?: IImage[] }) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 w-full max-w-2xl block">
        <TabList className="grid grid-cols-4 gap-6">
          {images?.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-auto w-full">
        {images?.map((image) => (
          <TabPanel key={image.id}>
            <div className="relative size-full overflow-hidden aspect-auto ">
              <Image
                src={image.url}
                alt="Product image"
                className="object-cover object-center rounded-lg"
                width={450}
                height={450}
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
