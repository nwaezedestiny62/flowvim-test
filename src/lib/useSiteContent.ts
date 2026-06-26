'use client';

import { useState, useEffect } from 'react';

export function useSiteContent() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(() => {
        setContent({});
        setLoading(false);
      });
  }, []);

  return { content, loading };
}