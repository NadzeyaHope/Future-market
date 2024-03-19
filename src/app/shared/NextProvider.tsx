'use client';

import React, { type ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Montserrat } from 'next/font/google';
export const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-sans',
});
const ThemeProvider = ({ children }: { children: ReactNode }) => {
	return (
		<NextUIProvider>
				{children}
		</NextUIProvider>
	);
};

export default ThemeProvider;