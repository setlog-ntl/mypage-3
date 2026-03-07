'use client';

import { AnimatedReveal } from './animated-reveal';
import type { HighlightItem } from '@/lib/config';
import { useLocale } from '@/lib/i18n';

interface Props {
  highlights: HighlightItem[];
}

export function HighlightsSection({ highlights }: Props) {
  const { locale, t } = useLocale();

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedReveal>
          <h2
            className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100"
          >
            {t('highlights.title')}
          </h2>
        </AnimatedReveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((item, i) => {
            const label = locale === 'en' && item.labelEn ? item.labelEn : item.label;
            const value = locale === 'en' && item.valueEn ? item.valueEn : item.value;
            return (
              <AnimatedReveal key={i} delay={i * 100}>
                <div
                  className="text-center p-8 rounded-2xl card-lift"
                  style={{ background: 'var(--surface-elevated)', border: '1px solid var(--surface-border)' }}
                >
                  <p
                    className="text-4xl sm:text-5xl font-bold mb-2"
                    style={{ color: 'var(--brand-primary)' }}
                  >
                    {value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
