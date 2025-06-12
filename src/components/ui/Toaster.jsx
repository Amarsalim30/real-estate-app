'use client'; // For safety if used in App Router later

import { Toaster } from 'sonner';

export default function AppToaster() {
  return <Toaster position="top-center" richColors closeButton />;
}
