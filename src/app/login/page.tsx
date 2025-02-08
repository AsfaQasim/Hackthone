"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SignedIn, SignedOut, SignInButton, useClerk } from "@clerk/clerk-react"; 

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  useClerk();  

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 p-6 shadow-lg rounded-2xl bg-white">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <CardContent>
          <SignedOut>
            {/* Show login form if the user is signed out */}
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                required
              />
              <Button type="submit" className="w-full">
                Log In
              </Button>
            </form>

            <div className="mt-4 text-center">
              {/* Show Sign In button if the user is not signed in */}
              <SignInButton mode="modal" />
            </div>
          </SignedOut>

          <SignedIn>
            {/* Show message if the user is signed in */}
            <div className="mt-4 text-center">
              <p>You are signed in!</p>
            </div>
          </SignedIn>
        </CardContent>
      </Card>
    </div>
  );
}
