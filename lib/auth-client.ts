import { expoClient } from '@better-auth/expo/client';
import { createAuthClient } from 'better-auth/react';
import * as SecureStore from 'expo-secure-store';

export const authClient = createAuthClient({
    baseURL: 'http://172.25.15.205:9000',
    plugins: [expoClient({
        scheme: "native",
        storagePrefix: "native",
        storage: SecureStore,
    })],
});

export const { signIn, signUp, useSession } = authClient;