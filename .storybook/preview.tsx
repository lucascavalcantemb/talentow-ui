import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Preview, ReactRenderer } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';

import '../src/styles/index.css';
import i18n from '../src/lib/i18n';

const withI18next = (Story: React.FC) => {
  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
    withI18next
  ],
};

export default preview;
