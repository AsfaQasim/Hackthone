import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react"; // Import Clerk components

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 p-6 shadow-lg rounded-2xl bg-white">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <CardContent>
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

          {/* Clerk's Sign In Button handling */}
          <SignedOut>
            <div className="mt-4 text-center">
              <SignInButton />
            </div>
          </SignedOut>

          <SignedIn>
            <div className="mt-4 text-center">
              <p>You are signed in!</p>
            </div>
          </SignedIn>
        </CardContent>
      </Card>
    </div>
  );
}
