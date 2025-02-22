"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Clapperboard, UserCircle } from "lucide-react";

export const AuthButton = () => {
  // TODO: Add different auth state
  return (
    <>
      <SignedIn>
        <UserButton>
          <UserButton.MenuItems>
            {/*  TODO: Add user profile menu */}
            <UserButton.Link
              label="Studio"
              href="/studio"
              labelIcon={<Clapperboard className="size-4" />}
            />
            <UserButton.Action label="manageAccount" />
          </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none"
          >
            <UserCircle />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
