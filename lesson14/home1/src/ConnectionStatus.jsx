import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');
  useEffect(() => {
    const onlineStatus = () => {
      setStatus('online');
    };

    const offlineStatus = () => {
      setStatus('offline');
    };
    window.addEventListener('online', onlineStatus);
    window.addEventListener('offline', offlineStatus);

    return () => {
      window.removeEventListener('online', onlineStatus);
      window.removeEventListener('offline', offlineStatus);
    };
  }, []);

  if (status !== 'online') {
    return <div className="status status_offline">offline</div>;
  }
  return <div className="status">online</div>;
};

export default ConnectionStatus;
