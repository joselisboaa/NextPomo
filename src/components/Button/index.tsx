"use client";

import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  background_color?: string;
  styles?: string;
}

export const Button = ({ background_color, styles, children }: Button) => {
  return (
    <button className={twMerge("rounded-full bg-secondary outline-0", background_color, styles)}>{children}</button>
  );
};
