"use client";
// components/MicroConsultation.tsx
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Container } from "@/components/Container";
import CustomInput from "../CustomInput";

interface FormValues {
  fullName: string;
  email: string;
  mobileNumber: string;
  pinCode: string;
}

const MicroConsultation: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Container>
      <div className="flex flex-col items-center text-center p-5 border-solid border-4 border-black rounded-2xl bg-white">
        <div className="px-5">
          <p className="font-bold underline text-xl font-sans text-black ">
            Get a free Micro Consultation now!
          </p>
          <p className="mt-2">
            Let the RTIsolution Team help you in exercising your Legal Rights.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 w-full max-w-md">
          <CustomInput
            {...register("fullName", { required: "Full Name is required" })}
            error={errors.fullName?.message}
            placeholder="Full Name"
          />

          <CustomInput
            label="Email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            error={errors.email?.message}
            placeholder="Enter your email"
          />

          <CustomInput
            label="Mobile Number"
            {...register("mobileNumber", {
              required: "Mobile Number is required",
              minLength: {
                value: 10,
                message: "Mobile number must be at least 10 digits",
              },
            })}
            error={errors.mobileNumber?.message}
            placeholder="Enter your mobile number"
          />

          <CustomInput
            label="Pin Code"
            {...register("pinCode", {
              required: "Pin Code is required",
              minLength: { value: 6, message: "Pin Code must be 6 digits" },
              maxLength: { value: 6, message: "Pin Code must be 6 digits" },
            })}
            error={errors.pinCode?.message}
            placeholder="Enter your pin code"
          />

          <button
            type="submit"
            className="mt-2 w-max p-10 bg-amber-400 text-black  font-bold py-2 rounded-md hover:bg-amber-600 transition"
          >
            Yeah!
          </button>
        </form>
      </div>
    </Container>
  );
};

export default MicroConsultation;
