"use client";
import React from "react";
import { motion } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  message: string;
  onClose: () => void;
};

export default function Modal({ isOpen, message, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="tw-fixed tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-lg tw-text-center tw-w-80">
        <h2 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-black">
          {message}
        </h2>
        <button
          onClick={onClose}
          className="tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded-md hover:tw-bg-blue-600 tw-transition">
          Restart
        </button>
      </motion.div>
    </div>
  );
}
