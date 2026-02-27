import { redirect } from "next/navigation";
import UIPlaygroundPage from "@/app/dev-tools/ui-playground/UIPlaygroundPage";

export default function UIPlaygroundRoute() {
  if (process.env.NEXT_PUBLIC_ENABLE_UI_PLAYGROUND !== "true") {
    redirect("/");
  }

  return <UIPlaygroundPage />;
}
