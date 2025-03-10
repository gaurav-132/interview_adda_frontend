"use client";
import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sizeClasses = {
    sm: "w-64",
    md: "w-80",
    lg: "w-96",
    xl: "w-[32rem]",
    xxl: "w-[40rem]",
};

const Modal = ({ isOpen, onClose, title, children, size = "md" }) => {
    const handleEscape = useCallback((event) => {
        if (event.key === "Escape") onClose();
    }, [onClose]);

    useEffect(() => {
        if (isOpen) document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, handleEscape]);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
        return () => (document.body.style.overflow = "auto");
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className={` p-6 rounded-lg ${sizeClasses[size]}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="flex justify-between items-center mb-4 py-2 px-4">
                        <h2 className="text-xl font-bold">{title}</h2>
                    </div>
                    <div> 
                        {children}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Modal;
