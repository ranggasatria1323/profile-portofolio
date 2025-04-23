import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

export const metadata = {
  title: "Portofolio Rangga",
  icons: {
    icon: "/logo-rangga.svg",
    shortcut: "/logo-rangga.svg",
    apple: "/logo-rangga.svg",
  },
  description: "Portofolio Rangga",
  keywords: "Portofolio Rangga",
  openGraph: {
    title: "Portofolio Rangga",
    description: "Portofolio Rangga",
    url: "https://portofolio-rangga.net",
    type: "website",
    images: [
      {
        url: "/logo-rangga.svg",
        width: 1200,
        height: 630,
        alt: "Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Portofolio Rangga",
    description: "Portofolio Rangga",
    images: ["/logo-rangga.svg"],
  },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
