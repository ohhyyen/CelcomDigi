"use client";

import React, { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from 'lucide-react';

interface BankAppConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
}

const BankAppConfirmationDialog: React.FC<BankAppConfirmationDialogProps> = ({ open, onClose }) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 90000); // Auto-dismiss after 90 seconds

      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] text-center">
        <DialogHeader>
          <DialogTitle className="text-2xl">Sahkan Transaksi Anda</DialogTitle>
          <DialogDescription className="text-base mt-2">
            Sila buka aplikasi perbankan dalam talian anda untuk meluluskan pembayaran ini.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center py-6">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mb-4" />
          <p className="text-gray-700">Menunggu pengesahan dari aplikasi bank anda...</p>
          <p className="text-sm text-gray-500 mt-2">(Pop-up ini akan ditutup secara automatik)</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BankAppConfirmationDialog;