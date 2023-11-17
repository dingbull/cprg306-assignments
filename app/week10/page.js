"use client";
 
import React, { useEffect } from "react";
// import { useRouter } from 'next/router';
import { useUserAuth } from "./_utils/auth-context"; // Adjust the path to where your auth-context is located
 
export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
  const handleSignIn = async () => {
    await gitHubSignIn();
  };

  // Your page content goes here, wrapped in a conditional that checks for the user
  return (
    <main>
      {/* Your page content that should be protected */}
      <p>Welcome, {user?.displayName}!</p>
 
      <button onClick={handleSignIn}>Sign in with GitHub</button>
      {/* Rest of your page components */}
    </main>
  );
}
 