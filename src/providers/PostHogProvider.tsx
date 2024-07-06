// app/providers.js
"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { ReactNode } from "react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
  });
}
export function CSPostHogProvider({ children }: { children: ReactNode }) {
  return (
    <PostHogProvider
      client={posthog}
      options={{
        loaded() {
          if (location.hostname !== "www.akashmoradiya.com") {
            posthog.opt_out_capturing();
          }
        },
      }}
    >
      {children}
    </PostHogProvider>
  );
}
