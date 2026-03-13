'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function GTMTracker() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    const handleClick = (e: MouseEvent) => {
      const target = e.target as Element;
      
      // Check for phone click
      const phoneLink = target.closest('a[href^="tel:"]');
      if (phoneLink) {
        window.dataLayer.push({ event: 'phone_click' });
      }

      // Check for start_tax_refund click
      const startRefundBtn = target.closest('[data-gtm="start_tax_refund"]');
      if (startRefundBtn) {
        window.dataLayer.push({ event: 'start_tax_refund' });
      }
    };

    const handleSubmit = (e: SubmitEvent) => {
      const target = e.target as HTMLFormElement;
      if (target && target.closest('[data-gtm="contact_form"]')) {
        window.dataLayer.push({ event: 'contact_form_submit' });
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('submit', handleSubmit);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return null;
}
