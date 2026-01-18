import { redirect } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata(
  "Follow on X (Twitter) - Soft  Stash",
  "Follow Soft  Stash on X (Twitter) for updates, new tools, and productivity tips.",
  "/x"
);

export default function Page() {
  return redirect("https://x.com/aghyadev");
}
