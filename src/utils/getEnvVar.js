import dotenv from 'dotenv'; // пакет щоб зчитувати та використовувати змінні оточення в додатку

dotenv.config();

// Функція, яка перевіряє наявність змінної оточення і генерує помилку, якщо змінна не встановлена
export function getEnvVar(name, defaultValue) {
  const value = process.env[name];
  // Для доступу до змінних оточення в середовищі Node.js використовується глобальний об'єкт process.env, який доступний у коді будь-якого модуля (так само як window або document доступні у браузері)

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing: process.env['${name}'].`);
}
