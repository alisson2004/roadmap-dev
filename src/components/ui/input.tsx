import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
      <input
        className={`block w-full px-4 py-2 text-sm border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 ${className || ""}`}
        {...props}
      />
    </div>
  );
};

export default Input;
