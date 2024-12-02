import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layout } from '../components/Layout';
import { RotateCcw } from 'lucide-react';

export function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { initialText, additionalText } = location.state || {};

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center">{t('result')}</h1>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">{t('initialText')}</h2>
            <p className="text-gray-600 whitespace-pre-wrap">{initialText}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">{t('additionalText')}</h2>
            <p className="text-gray-600 whitespace-pre-wrap">{additionalText}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RotateCcw size={20} />
            {t('startOver')}
          </button>
        </div>
      </div>
    </Layout>
  );
}