"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { PaymentDetails } from '@/pages/Checkout';

const formSchema = z.object({
  cardNumber: z.string().regex(/^\d{16}$/, { message: "Nombor kad tidak sah (16 digit)." }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Tarikh luput tidak sah (MM/YY)." }),
  cvv: z.string().regex(/^\d{3,4}$/, { message: "CVV tidak sah (3 atau 4 digit)." }),
});

interface PaymentFormProps {
  onSubmit: (data: PaymentDetails) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
  const form = useForm<PaymentDetails>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Maklumat Pembayaran</h2>
        {/* Imej logo pembayaran telah dipadamkan di sini */}
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombor Kad</FormLabel>
              <FormControl>
                <Input placeholder="XXXX XXXX XXXX XXXX" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="expiryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tarikh Luput (MM/YY)</FormLabel>
                <FormControl>
                  <Input placeholder="MM/YY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cvv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CVV</FormLabel>
                <FormControl>
                  <Input placeholder="XXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Bayar
        </Button>
      </form>
    </Form>
  );
};

export default PaymentForm;