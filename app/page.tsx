import { Waitlist } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className='flex items-center justify-center w-full min-h-screen'>
      <Waitlist />
    </div>
  );
}
