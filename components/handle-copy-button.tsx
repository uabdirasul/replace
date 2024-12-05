import { useCallback, useEffect } from "react";
import { Button } from "./ui/button";

interface HandleCopyButtonProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const HandleCopyButton = ({
  text,
  setText,
  setShowModal,
  setIsSuccess
}: HandleCopyButtonProps) => {
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
  }, [text, setIsSuccess, setShowModal, setText]);

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

  return (
    <div className="flex justify-center">
      <Button size="lg" className="px-8" onClick={handleCopy}>
        Kóshirip alıw
      </Button>
    </div>
  );
};

export default HandleCopyButton;
