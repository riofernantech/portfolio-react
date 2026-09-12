import { useEffect } from 'react';

export function useDocumentTitle(title) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = title;

    // Optional: Reset title back to original when component unmounts
    return () => {
      document.title = originalTitle;
    };
  }, [title]); // Runs every time the title changes
}
