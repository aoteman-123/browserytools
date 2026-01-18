import { redirect } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata(
  "GitHub - Soft  Stash Source Code",
  "View the source code for Soft  Stash on GitHub. Contribute to the project and help improve these free online tools.",
  "/gh"
);

export default function Page() {
  return redirect("https://github.com/aghyad97/softstash");
}
