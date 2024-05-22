"use client";

import { ClerkProvider, useAuth } from "@clerk/clerk-react";

import {
  Authenticated,
  AuthLoading,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

import { Loading } from "@/components/auth/loading";

import SignIn from "@/app/sign-in/[[...sign-in]]/page";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

const clerkPublicKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
  return (
    <ClerkProvider publishableKey={clerkPublicKey}>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Unauthenticated>
          <SignIn />
        </Unauthenticated>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
