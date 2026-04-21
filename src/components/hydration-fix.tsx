'use client';

import { useEffect } from 'react';

export default function HydrationFix() {
  useEffect(() => {
    // Suppress hydration mismatch warnings caused by browser extensions
    const originalError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' &&
        args[0].includes('hydration') &&
        args[0].includes('crxemulator')
      ) {
        return; // Suppress browser extension hydration warnings
      }
      originalError.call(console, ...args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  return null;
}
