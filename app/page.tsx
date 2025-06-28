import type { Metadata } from "next";
import Step1 from "./containers/Step1";

export default function IndexPage() {
  return <Step1 />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
