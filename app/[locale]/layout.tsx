import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'de' }];
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}