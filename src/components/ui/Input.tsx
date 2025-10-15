import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: 'text' | 'email' | 'password' | 'tel';
  error?: string;
  success?: boolean;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  name?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  success,
  multiline = false,
  rows = 4,
  required = false,
  name,
}) => {
  const baseStyles =
    'w-full px-4 py-3 rounded-2xl border-2 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none';
  const stateStyles = error
    ? 'border-red-500 focus:border-red-600'
    : success
      ? 'border-green-500 focus:border-green-600'
      : 'border-gray-300 dark:border-gray-600 focus:border-primary';

  const InputElement = multiline ? 'textarea' : 'input';

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <InputElement
        className={`${baseStyles} ${stateStyles}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={multiline ? undefined : type}
        rows={multiline ? rows : undefined}
        required={required}
        name={name}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      {success && <p className="mt-1 text-sm text-green-500">✓ Campo válido</p>}
    </div>
  );
};
