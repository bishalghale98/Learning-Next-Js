"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { string } from "zod";
import { Spinner } from "@/components/Spinner";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (id: string) => void;
  deleteId: string; // ✅ added
  title?: string;
  message?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  variant?: "destructive" | "default";
  loading?: boolean;
}

const DeleteModel = ({
  isOpen,
  onClose,
  onConfirm,
  deleteId,
  title = "Confirm Action",
  message = "Are you sure you want to delete this item?",
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
  variant = "destructive",
  loading = false || true,
}: ConfirmationModalProps) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleConfirm = () => {
    onConfirm(deleteId);
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={handleClose}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{message}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={handleClose}>
            {cancelButtonText}
          </Button>
          <Button variant={variant} onClick={handleConfirm}>
            {confirmButtonText} {loading ? <Spinner /> : null}
          </Button>
        </DialogFooter>
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          onClick={handleClose}
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModel;
