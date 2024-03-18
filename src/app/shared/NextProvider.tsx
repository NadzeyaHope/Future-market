'use client';

import React, { type ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	return (
		<NextUIProvider>
				{children}
		</NextUIProvider>
	);
};

export default ThemeProvider;