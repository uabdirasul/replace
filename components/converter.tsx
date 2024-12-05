"use client";

import { useEffect, useState } from "react";

import AnimatedModal from "@/components/animated-modal";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";

export default function TextConverter() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <div className="container mx-auto px-4 py-8">
        <Header />

        <Main setShowModal={setShowModal} setIsSuccess={setIsSuccess} />

        <Footer />

        <AnimatedModal showModal={showModal} isSuccess={isSuccess} />
      </div>
    </div>
  );
}
