"use client";

import React, { useEffect } from 'react';

interface PaymentProcessingProps {
  onComplete: () => void;
}

const PaymentProcessing: React.FC<PaymentProcessingProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 15000); // 15 seconds loading

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 sm:h-20 sm:w-20 border-t-4 border-b-4 border-blue-500"></div> {/* Saiz spinner responsif */}
      <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-medium text-gray-700">Memproses pembayaran anda...</p> {/* Saiz teks responsif */}
      <p className="mt-1 sm:mt-2 text-gray-600 text-center text-sm sm:text-base">Sila jangan tutup halaman ini.</p> {/* Saiz teks responsif */}
    </div>
  );
};

export default PaymentProcessing;