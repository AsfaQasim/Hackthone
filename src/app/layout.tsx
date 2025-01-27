"use client"
// import type { Metadata } from "next";
import "./globals.css"; // Ensure global CSS is applied
import Header from "./component/header";
import Footer from "./component/footer";
import { Provider } from "react-redux"; // Import the correct Provider from react-redux
import store from "./Cart/redux/store"; // Ensure correct store import



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Only one Provider wrapping the entire app */}
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
