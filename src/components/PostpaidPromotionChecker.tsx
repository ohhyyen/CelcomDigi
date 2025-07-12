import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { showSuccess, showError } from '@/utils/toast';

const PostpaidPromotionChecker: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleCheckPromotions = () => {
    if (phoneNumber.trim() === '') {
      showError('Sila masukkan nombor telefon anda.');
      return;
    }
    // Di sini Anda akan mengintegrasikan logika untuk memeriksa promosi
    // Untuk saat ini, kita hanya akan menampilkan pesan sukses.
    showSuccess(`Mencari promosi untuk nombor: ${phoneNumber}`);
    // Anda bisa menambahkan navigasi ke halaman promosi atau menampilkan hasil di sini
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-2xl mx-auto mt-12">
      <h3 className="text-2xl font-bold mb-4">Lihat Promosi Eksklusif Anda</h3>
      <p className="text-gray-600 mb-6">Masukkan nombor telefon pascabayar CelcomDigi anda untuk melihat promosi peranti iPhone yang tersedia untuk anda.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Input
          type="tel"
          placeholder="Contoh: 0191234567"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="max-w-xs mx-auto sm:mx-0"
        />
        <Button onClick={handleCheckPromotions} className="bg-blue-600 hover:bg-blue-700 text-white">
          Lihat Promosi
        </Button>
      </div>
    </div>
  );
};

export default PostpaidPromotionChecker;