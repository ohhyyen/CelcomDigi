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
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-blue-500"></div>
      <p className="mt-6 text-xl font-medium text-gray-700">Memproses pembayaran anda...</p>
      <p className="mt-2 text-gray-600 text-center">Sila jangan tutup halaman ini.</p>
    </div>
  );
};

export default PaymentProcessing;