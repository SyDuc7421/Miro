import { SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <SignIn />
    </div>
  );
}
