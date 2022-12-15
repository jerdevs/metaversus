import { motion } from "framer-motion";

import { textContainer, textVariant2 } from "../utils/motion";

interface TypingTextProps {
  title: string;
  textStyles?: string;
}

const TypingText: React.FC<TypingTextProps> = (
  props: TypingTextProps
): React.ReactElement => {
  const { title, textStyles } = props;
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px] text-slate-300 ${textStyles}`}
    >
      {Array.from(title).map((letter: string, index: number) => {
        return (
          <motion.span variants={textVariant2} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </motion.p>
  );
};

export default TypingText;
