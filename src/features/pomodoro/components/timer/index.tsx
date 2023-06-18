import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export const Timer = () => {
  return (
    <div
      className={twMerge(
        classNames(
          "my-5 flex h-[18.75rem] w-[18.75rem] items-center justify-center rounded-full border-2 border-solid border-secondary",
          {
            "border-rest-primary": false,
          },
        ),
      )}
    >
      <span className="font-Roboto text-[6.25rem] font-bold text-white">25:00</span>
    </div>
  );
};
