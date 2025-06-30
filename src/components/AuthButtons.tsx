"use client";

import { Suspense, useState } from 'react';
import { SignIn, UserButton } from '@stackframe/stack';
import { useUser } from "@stackframe/stack";
import { Button } from './ui/button';

const LoginForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-primary-950 bg-opacity-50 flex items-center justify-center z-[70]">
      <div className="bg-card p-6 rounded-lg shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="mt-2">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

const AuthButtonsContent = () => {
  const user = useUser();
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <UserButton />
      ) : (
        <>
          <Button onClick={() => setShowLoginForm(true)}>
            Client Login
          </Button>
          {showLoginForm && (
            <LoginForm onClose={() => setShowLoginForm(false)} />
          )}
        </>
      )}
    </div>
  );
};

const AuthButtons = () => {
  return (
    <Suspense fallback={<div className="h-8 w-8 animate-pulse bg-muted rounded-full" />}>
      <AuthButtonsContent />
    </Suspense>
  );
};

export default AuthButtons; 