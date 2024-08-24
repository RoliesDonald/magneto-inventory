import { Roboto } from "next/font/google";
import "../styles/main.scss";
import Providers from "@/context/provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Magneto Dashboard",
  description: "Next is come now",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="dark max-h-screen"
      style={{ colorScheme: "dark" }}
    >
      <body
        className={(roboto.className, "dark:bg-indigo-900 bg-neutral-200")}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
