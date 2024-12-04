import Keycloak, { KeycloakInitOptions } from 'keycloak-js';
import React from 'react';

type KeycloakAuthProviderProps = {
  client: Keycloak;
  initOptions?: KeycloakInitOptions;
  children: React.ReactNode;
};

export type { KeycloakAuthProviderProps }
