/* eslint-disable @next/next/no-img-element */

export default function DetailsSkeleton() {
  return (
    <div className="flex w-full animate-pulse overflow-hidden">
      <div className="rounded-[1.25rem] w-[40rem] h-[40rem] bg-[#353749]" />

      <div className="ml-10 content-card">
        <h1 className="w-36 h-8 rounded bg-[#353749]" />

        <div className="mt-4 flex flex-col gap-2">
          <span className="w-full h-5 rounded bg-[#353749]" />
          <span className="w-full h-5 rounded bg-[#353749]" />
          <span className="w-[50%] h-5 rounded bg-[#353749]" />
        </div>

        <hr className="w-full border-[#242634] my-8" />

        <div className="flex flex-col gap-2">
          <span className="w-24 h-5 rounded bg-[#353749]" />
          <span className="w-24 h-5 rounded bg-[#353749]" />
        </div>

        <hr className="w-full border-[#242634] my-8" />

        <div className="w-32 h-12 bg-[#353749] rounded-xl" />
      </div>
    </div>
  );
}
