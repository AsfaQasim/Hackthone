import React from 'react';
import { useUser } from '@clerk/nextjs'; 
import { useRouter } from 'next/navigation'; 

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  // Show a loading state while Clerk is initializing
  if (!isLoaded) {
    return <div>Loading authentication state...</div>;
  }

  // Redirect to login if the user is not authenticated
  if (!isSignedIn) {
    router.push('/login'); 
    return null; 
  }

  // If the user is authenticated, render the children
  return <>{children}</>;
};

export default AuthGuard;