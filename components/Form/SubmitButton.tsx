type Props = {
  extraStyles?: string;
};

export const SubmitButton: React.FC<Props> = ({ extraStyles }) => {
  return (
    <button
      className={`ml-auto font-medium text-[30px] uppercase hover:opacity-50 focus:opacity-50 transition-opacity leading-[normal]
      lg:text-[32px]`}
      type="submit"
      aria-label="submit button"
    >
      Send
    </button>
  );
};
