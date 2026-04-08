import { useState, useEffect } from 'react';

export const usePrivateAccess = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem('rh_session_token');
    if (session === 'akhchab_private_2026') {
      setIsAuthorized(true);
    }
  }, []);

  const login = (code: string) => {
    if (code === '1234') { // يمكنك تغيير الرمز السري هنا
      localStorage.setItem('rh_session_token', 'akhchab_private_2026');
      setIsAuthorized(true);
      return true;
    }
    return false;
  };

  return { isAuthorized, login };
};
