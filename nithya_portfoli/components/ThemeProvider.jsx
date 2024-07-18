'use client';

import { ThemeProvider as NextThemesProvider } from 
"next-themes";

import function ThemeProvider({children,...props}){
    return <NextThemesProvider{...props}>{children}</NextThemesProvider>
}