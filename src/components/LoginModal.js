"use client";
import React, { useState } from 'react';
import Modal from '@/components/Modal';

const LoginModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Login" size="lg">
            <div>
                Hello, Welcome to Interview Adda
            </div>
        </Modal>
    );
};

export default LoginModal;
