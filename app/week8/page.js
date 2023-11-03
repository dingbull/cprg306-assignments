"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserAuth } from './_utils/auth-context'; // Adjust the path to where your auth-context is located

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    // If there's no user, redirect to the login page
    if (!user) {
      router.push('/login'); // Adjust this to the route of your login page
    }
  }, [user, router]);

  // Render a loading state or nothing until the user is verified
  if (!user) {
    return <p>Loading...</p>; // or return null to render nothing
  }

  // Your page content goes here, wrapped in a conditional that checks for the user
  return (
    <main>
      {/* Your page content that should be protected */}
      <p>Welcome, {user.displayName}!</p>
      {/* Rest of your page components */}
    </main>
  );
}
