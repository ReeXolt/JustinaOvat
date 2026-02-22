// hooks/useLogo.ts
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

import afieguLogo from '../assets/images/afiegulogo.jpeg';
import servicecraftLogo from '../assets/images/scraft.png';
import podcastLogo from '../assets/images/podcast.png';
import defaultLogo from "../assets/images/logo.png";
import defaultLogoDark from "../assets/images/logoDark.png";

export function useLogo() {
  const location = useLocation();

  return useMemo(() => {
    const path = location.pathname;

    if (path === '/afiegu' || path.startsWith('/afiegu/')) {
      return afieguLogo;
    }
    if (path === '/podcast' || path.startsWith('/podcast/')) {
      return podcastLogo;
    }
    if (path === '/book-details' || path.startsWith('/book-details/') || path === '/blog') {
      return defaultLogoDark;
    }
    if (path === '/organizations' || path.startsWith('/organizations/')) {
      return servicecraftLogo;
    }

    return defaultLogo;
  }, [location.pathname]);
}