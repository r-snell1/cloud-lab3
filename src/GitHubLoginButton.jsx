import React from 'react';

const GitHubLoginButton = () => {
  const handleLogin = () => {
    // GitHub OAuth URL with your Client ID
    const clientId = 'YOUR_GITHUB_CLIENT_ID';
    const redirectUri = 'http://localhost:3000/auth/callback'; // This should be your app's callback URL
    const scope = 'read:user'; // You can adjust the scope based on what you need
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
    
    window.location.href = authUrl;
  };

  return <button onClick={handleLogin}>Login with GitHub</button>;
};

export default GitHubLoginButton;
