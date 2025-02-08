"use client";

import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-react";
import { Provider } from "react-redux";
import store from "./Cart/redux/store";
import Header from "./component/header";
import Footer from "./component/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ClerkLoaded>
        <Provider store={store}>
          <html lang="en">
            <body className="antialiased">
              <Header />
              {children}
              <Footer />
            </body>
          </html>
        </Provider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}