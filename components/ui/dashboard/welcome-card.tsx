'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

export default function WelcomeCard() {
  const [username, setUsername] = useState<string | null>('');

  useEffect(() => {
    setUsername(sessionStorage.getItem('name'));
  }, []);

  return (
    <Card className="h-full rounded">
      <CardHeader>
        <CardTitle>Welcome{username ? `, ${username}!` : '!'}</CardTitle>
        <CardDescription>
          On this website, you can find information about me, my projects, and my skills.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
