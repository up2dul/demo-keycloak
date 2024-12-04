import KeycloakProvider from "@/keycloak/keycloak-provider";
import type { AppProps } from "next/app";
import Keycloak from 'keycloak-js';

import "@/styles/globals.css";

const keycloakInstance = new Keycloak({
  url: process.env.NEXT_PUBLIC_CLOAK_URL,
  realm: process.env.NEXT_PUBLIC_CLOAK_REALM,
  clientId: process.env.NEXT_PUBLIC_CLOAK_CLIENT_ID,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <KeycloakProvider client={keycloakInstance}>
      <Component {...pageProps} />
    </KeycloakProvider>
  );
}
