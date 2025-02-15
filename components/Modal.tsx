"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

export default function Modal({ isOpen, message, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
        <h2 className="text-2xl font-bold mb-4 text-black">{message}</h2>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          Restart
        </button>
      </div>
    </div>
  );
}
