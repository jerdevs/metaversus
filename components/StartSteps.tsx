interface StartStepsProps {
  number: number;
  text: string;
}

const StartSteps: React.FC<StartStepsProps> = (
  props: StartStepsProps
): React.ReactElement => {
  const { number, text } = props;
  return (
    <div className="flex justify-center items-center flex-row">
      <div className="flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-slate-600">
        <p className="font-bold text-[20px] text-white">0{number}</p>
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-slate-300 leading-[32px]">
        {text}
      </p>
    </div>
  );
};

export default StartSteps;
