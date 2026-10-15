import { ReactNode } from "react";

export interface CardProps {
  isIconNeeded?: boolean;
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
  className?: string;
}

export interface FadeProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export interface DownloadButtonProps {
  icon: string;
  text: string;
  platform: "ios" | "android";
  href?: string;
}

export interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}


export interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}