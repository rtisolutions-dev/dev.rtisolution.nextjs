// components/CustomInput.tsx
import React from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <div className="mb-4">
      <label className="block text-left text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...props}
        className={`mt-1 block w-full p-2 border rounded-md ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && (
        <span className="block text-red-500 text-sm text-left">{error}</span>
      )}
    </div>
  );
};

export default CustomInput;
