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
      <DialogContent className="sm:max-w-[425px] w-[95vw] text-center"> {/* Lebar dialog responsif */}
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">Sahkan Transaksi Anda</DialogTitle> {/* Saiz teks responsif */}
          <DialogDescription className="text-sm sm:text-base mt-2"> {/* Saiz teks responsif */}
            Sila buka aplikasi perbankan dalam talian anda untuk meluluskan pembayaran ini.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center py-4 sm:py-6"> {/* Padding responsif */}
          <Loader2 className="h-10 w-10 sm:h-12 sm:w-12 animate-spin text-blue-600 mb-4" /> {/* Saiz ikon responsif */}
          <p className="text-gray-700 text-sm sm:text-base">Menunggu pengesahan dari aplikasi bank anda...</p> {/* Saiz teks responsif */}
          <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">(Pop-up ini akan ditutup secara automatik)</p> {/* Saiz teks responsif */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BankAppConfirmationDialog;