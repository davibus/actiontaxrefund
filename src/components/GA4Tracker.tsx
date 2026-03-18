'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-FX1D385BEK';

export default function GA4Tracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && typeof window !== 'undefined' && window.gtag) {
      let url = pathname;
      if (searchParams && searchParams.toString()) {
        url += `?${searchParams.toString()}`;
      }
      
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Element;
      
      const phoneLink = target.closest('a[href^="tel:"]');
      if (phoneLink && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'phone_click');
      }

      const startRefundBtn = target.closest('[data-gtm="start_tax_refund"]');
      if (startRefundBtn && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'start_tax_refund');
      }
    };

    const handleSubmit = (e: SubmitEvent) => {
      const target = e.target as HTMLFormElement;
      if (target && target.closest('[data-gtm="contact_form"]') && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_form_submit');
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
