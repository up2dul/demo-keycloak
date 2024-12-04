import Image from "next/image";
import localFont from "next/font/local";

import { useKeycloak } from "@/keycloak/hooks";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <p>Loading...</p>;
  }

  if (!keycloak.authenticated) {
    return <p>Authenticating...</p>;
  }

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        {keycloak.authenticated ? (
          <>
          <h1>Hello {keycloak?.tokenParsed?.given_name} {keycloak?.tokenParsed?.family_name}</h1>
          <button type="button" onClick={() => keycloak.logout()}>
            Logout
          </button>
          </>
        ) : (
          <>
            <h1>Login dulu</h1>
            <button type="button" onClick={() => keycloak.login()}>
              Login
            </button>
          </>
        )}
      </main>
    </div>
  );
}
