import { useState } from "react";
import HandleCopyButton from "./handle-copy-button";
import InputConverter from "./input-converter";

interface MainProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const Main = ({ setShowModal, setIsSuccess }: MainProps) => {
  const [text, setText] = useState<string>("");
  return (
    <main className="max-w-3xl mx-auto space-y-6">
      <InputConverter text={text} setText={setText} />

      <HandleCopyButton
        text={text}
        setText={setText}
        setShowModal={setShowModal}
        setIsSuccess={setIsSuccess}
      />
    </main>
  );
};

export default Main;
