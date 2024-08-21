'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useState } from 'react';

export default function Page() {
  const [name, setName] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    if (name) {
      sessionStorage.setItem('name', name);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center p-10 min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Max ML-Portfolio</CardTitle>
          <CardDescription>Please enter your name:</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Name"
            value={name}
            onChange={handleInputChange}
            className="mb-5 rounded"
          />
          <Link href="/dashboard">
            <Button
              onClick={handleButtonClick}
              variant="default"
              className="rounded">
              Continue
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
