import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TextInput } from '../components/TextInput';
import { Layout } from '../components/Layout';
import { ArrowRight } from 'lucide-react';

export function DataEnterPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [additionalText, setAdditionalText] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (additionalText.trim()) {
      navigate('/result', {
        state: {
          initialText: location.state?.text || '',
          additionalText,
        },
      });
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center">{t('additionalInfo')}</h1>
        <TextInput
          value={additionalText}
          onChange={setAdditionalText}
          placeholder={t('enterAdditionalInfo')}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('viewResult')}
            <ArrowRight size={20} />
          </button>
        </div>
      </form>
    </Layout>
  );
}