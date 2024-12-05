"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Heart, XCircle } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export default function TextConverter() {
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopy = useCallback(() => {
    if (text.trim() === "") {
      setIsSuccess(false);
      setShowModal(true);
    } else {
      navigator.clipboard
        .writeText(
          text
            .replace(/U'/g, "Ú")
            .replace(/U’/g, "Ú")
            .replace(/A'/g, "Á")
            .replace(/A’/g, "Á")
            .replace(/O'/g, "Ó")
            .replace(/O’/g, "Ó")
            .replace(/N'/g, "Ń")
            .replace(/N’/g, "Ń")
            .replace(/I'/g, "Í")
            .replace(/I’/g, "Í")
            .replace(/G'/g, "Ǵ")
            .replace(/G’/g, "Ǵ")
            .replace(/g'/g, "ǵ")
            .replace(/g’/g, "ǵ")
            .replace(/o'/g, "ó")
            .replace(/o’/g, "ó")
            .replace(/n'/g, "ń")
            .replace(/n’/g, "ń")
            .replace(/u'/g, "ú")
            .replace(/u’/g, "ú")
            .replace(/a'/g, "á")
            .replace(/a’/g, "á")
            .replace(/i'/g, "ı")
            .replace(/i’/g, "ı")
        )
        .then(() => {
          setIsSuccess(true);
          setShowModal(true);
          setText("");
        })
        .catch(() => {
          setIsSuccess(false);
          setShowModal(true);
        });
    }
  }, [text]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        handleCopy();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleCopy]);

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
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">
            Replace - Upgrade your Karakalpak letters
          </h1>
          <ThemeToggle />
        </header>

        <main className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Háriplerdi ózgertiw ushın belgisinen paydalanıp jazıń: tamír{" "}
              {"=>"} tamır. Kóshirip alıw ushın: Ctrl + Enter
            </p>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Text to convert..."
              className="min-h-[300px] resize-none p-4 text-lg"
            />
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="px-8" onClick={handleCopy}>
              Kóshirip alıw
            </Button>
          </div>
        </main>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Crafted with <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
            by{" "}
            <a
              href="https://github.com/abdirasulovna"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Abdirasul Ubbiniyazov
            </a>
          </p>
        </footer>

        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: "100%" }}
              animate={{ opacity: 1, y: 0, x: "0%" }}
              exit={{ opacity: 0, y: 50, x: "100%" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
                isSuccess ? "bg-green-500" : "bg-red-500"
              } text-white flex items-center space-x-2`}
            >
              {isSuccess ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <XCircle className="w-6 h-6" />
              )}
              <span>
                {isSuccess
                  ? "Copied successfully"
                  : "Error: There is nothing to copy"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
