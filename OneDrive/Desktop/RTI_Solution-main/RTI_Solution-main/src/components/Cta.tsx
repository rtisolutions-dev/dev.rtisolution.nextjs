import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-5xl gap-5 mx-auto px-6 py-6 bg-gray-100 rounded-lg">
        {/* Left Section */}
        <div className="flex-grow text-left">
          <h1 className="text-xl font-bold text-red-600">
            RTI<span className="text-gray-500 italic">solution</span>
          </h1>
          <h2 className="mt-2 text-lg font-semibold text-gray-800">
            Empowering the masses...
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            RTIsolution is a VC-backed legaltech startup empowering the masses
            through affordable result-driven legal solutions. We're helping
            people in exercising their Right to Information, Consumer Rights, and fixing legal issues.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-shrink-0">
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-green-500 rounded-full hover:bg-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326a7.5 7.5 0 1 0-1.233 12.276l.03-.018a.651.651 0 0 0 .242-.254l.014-.027 1.035-2.518a.651.651 0 0 0-.059-.662l-.023-.028-.006-.006a.625.625 0 0 0-.098-.098l-.027-.023-.006-.006a.65.65 0 0 0-.624-.081l-2.173.677a6.593 6.593 0 0 1-2.11-.894.651.651 0 0 1-.258-.305 6.638 6.638 0 0 1-.436-1.59.651.651 0 0 1 .227-.57l.005-.006a.65.65 0 0 0 .095-.098l.028-.023.006-.006a.65.65 0 0 0 .081-.625l-.677-2.173a.65.65 0 0 0-.302-.305A6.652 6.652 0 0 1 2.453 3.2a7.473 7.473 0 0 0 1.506 10.94 7.5 7.5 0 0 0 10.942-1.505A7.473 7.473 0 0 0 13.6 2.326ZM9.065 4.93a.666.666 0 0 1 0 .941l-1.622 1.622 1.622 1.622a.666.666 0 0 1-.941.941l-1.622-1.622L4.88 9.135a.666.666 0 1 1-.941-.941L5.56 6.57 3.94 4.95a.666.666 0 1 1 .941-.941L6.5 5.63 8.122 4.01a.666.666 0 0 1 .942 0Z" />
            </svg>
            Join AskRTIsolution now!
          </a>
        </div>
      </div>
    </Container>
  );
};
