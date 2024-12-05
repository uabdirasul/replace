import { Textarea } from "./ui/textarea";

interface InputConverterProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const InputConverter = ({ text, setText }: InputConverterProps) => {
  return (
    <div className="space-y-2">
      <p className="text-md text-muted-foreground">
        Háriplerdi ózgertiw ushın &#39;, &#96; sıyalı belgilerden paydalanıp
        jazıń: ali&#39;m {"=>"} alım.
      </p>
      <p className="text-md text-muted-foreground">
        Kóshirip alıw ushın:{" "}
        <span className="inline-block font-medium text-span_text bg-span_bg px-1 rounded-md shadow-sm h-6">
          Ctrl + Enter
        </span>
      </p>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text to convert..."
        className="min-h-[300px] resize-none p-4 text-lg"
      />
    </div>
  );
};

export default InputConverter;
