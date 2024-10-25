declare module "react-back-to-top-button" {
  import { ComponentType } from "react";

  interface BackToTopProps {
    showAt?: number;
    speed?: number;
    easing?: string;
    children?: React.ReactNode;
  }

  const BackToTop: ComponentType<BackToTopProps>;
  export default BackToTop;
}
