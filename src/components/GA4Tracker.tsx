'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GA4Tracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !pathname || typeof window === 'undefined' || !window.gtag) {
      return;
    }

    let url = pathname;
    if (searchParams && searchParams.toString()) {
      url += `?${searchParams.toString()}`;
    }

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
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

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname + window.location.search,
          });
        `}
      </Script>
    </>
  );
}
