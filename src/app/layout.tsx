import type { Metadata } from "next";
import "./globals.css";
import { TanstackProvider } from "@/lib/tanstack-query/tanstack-provider";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/lib/theme-provider/theme-provider"

export const metadata: Metadata = {
  icons: {
    icon: "/icon/logo.svg",
  },
  title: "Next-template",
  description: "Next.js with Shadcn UI, Tanstack Query, and Supabase. Also implements with i18n, auth, and more.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning> 
      <body className={`antialiased`}>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Toaster />
          <TanstackProvider>{children}</TanstackProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
