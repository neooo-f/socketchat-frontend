import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-4xl font-bold">{t('header.title')}</h1>
      <p className="text-sm italic">{t('header.subtitle')}</p>
    </>
  );
};
