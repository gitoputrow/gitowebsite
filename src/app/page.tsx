import { redirect } from "next/navigation";
import "./globals.css";

export default function RedirectHome() {
  redirect("/greeting");
}
