import React, { ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import CustomScratchCard from "./CustomScratchCard"; // Ensure the path is correct

interface ModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  onConfirm?: () => void;
  cancelText?: string;
  submitText?: string;
  isTitleCenter?: boolean;
  isDescriptionCenter?: boolean;
  isFooterCenter?: boolean;
  isBorder?: boolean;
  handleAutoScratch: any;
  component: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onOpenChange,
  title,
  description,
  onConfirm,
  cancelText,
  submitText,
  isTitleCenter,
  isDescriptionCenter,
  isFooterCenter,
  isBorder,
  handleAutoScratch,
  component,
}) => {
  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    onOpenChange(false); // Close the modal after confirmation
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent
        className={isBorder ? "bg-black/90" : "border-none bg-black/90"}
      >
        <AlertDialogHeader>
          <AlertDialogTitle
            className={isTitleCenter ? "text-center text-white" : "text-white"}
          >
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription
            className={isDescriptionCenter ? "text-center" : ""}
          >
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex justify-center items-center mb-4">
          <CustomScratchCard cardId={1} handleAutoScratch={handleAutoScratch} />{" "}
          {/* Pass your card ID or any prop needed */}
        </div>

        <AlertDialogFooter
          className={isFooterCenter ? "sm:justify-center" : ""}
        >
          <AlertDialogCancel onClick={() => onOpenChange(false)}>
            {cancelText || "Cancel"}
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>
            {submitText || "Confirm"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
