import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    // バックエンドからユーザーのテーマ設定を取得
    fetch('https://your-render-backend.onrender.com/api/user-theme')
      .then(response => response.json())
      .then(data => setTheme(data.theme))
      .catch(error => console.error('Error fetching theme:', error));
  }, []);

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    // バックエンドにテーマ設定を保存
    fetch('https://your-render-backend.onrender.com/api/user-theme', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ theme: newTheme }),
    }).catch(error => console.error('Error updating theme:', error));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};