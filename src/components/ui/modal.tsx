"use client";

import { Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/core/utils";

interface IModalProps {
  open: boolean;
  onClose: () => void;
  classes?: {
    dialogPanel: string;
    container: string;
  };
  children: React.ReactNode;
}

const Modal = ({ open, onClose, classes, children }: IModalProps) => {
  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex justify-center items-center min-h-full text-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                className={cn(
                  "w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle bg-white dark:bg-zinc-950",
                  classes?.dialogPanel ?? ""
                )}
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden flex items-center px-4 pb-8 pt-14 shadow-2xl  sm:px-6 sm:pt-8 md:p-6 lg:p-8",
                    classes?.container ?? ""
                  )}
                >
                  <div className="absolute right-4 top-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full shadow-xl dark:shadow-md"
                      onClick={onClose}
                    >
                      <X size={15} />
                    </Button>
                  </div>
                  {children}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
