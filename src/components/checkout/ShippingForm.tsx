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
import { Textarea } from '@/components/ui/textarea';
import { ShippingDetails } from '@/pages/Checkout';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Nama penuh diperlukan." }),
  icNumber: z.string().regex(/^\d{12}$/, { message: "Nombor IC tidak sah (12 digit tanpa sengkang)." }),
  phoneNumber: z.string().regex(/^\d{10,11}$/, { message: "Nombor telefon tidak sah (10 atau 11 digit)." }),
  address: z.string().min(10, { message: "Alamat penghantaran diperlukan." }),
});

interface ShippingFormProps {
  onSubmit: (data: ShippingDetails) => void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({ onSubmit }) => {
  const form = useForm<ShippingDetails>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      icNumber: '',
      phoneNumber: '',
      address: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6"> {/* Jarak responsif */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">Maklumat Penghantaran</h2> {/* Saiz teks responsif */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Penuh</FormLabel>
              <FormControl>
                <Input placeholder="Nama Penuh Anda" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="icNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombor IC (Tanpa Sengkang)</FormLabel>
              <FormControl>
                <Input placeholder="Contoh: 900101123456" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombor Telefon</FormLabel>
              <FormControl>
                <Input placeholder="Contoh: 0123456789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alamat Penghantaran</FormLabel>
              <FormControl>
                <Textarea placeholder="Alamat lengkap anda" className="resize-y" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Seterusnya
        </Button>
      </form>
    </Form>
  );
};

export default ShippingForm;