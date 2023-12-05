/* eslint-disable @next/next/no-img-element */

export default function CardSkeleton() {

  return (
    <article
      className="width-[24rem] h-[31rem] bg-[#242634] rounded-[1.25rem] animate-pulse overflow-hidden"
    >
      <div  className="bg-[#242634] p-2">
        <div className="rounded-[1.25rem] bg-[#353749]  w-96 h-80" />
      </div>

      <div className="mx-6 my-4">
        <div className="mb-5">
          <strong className="w-28 h-5 rounded text-2xl block bg-[#353749]" />
          <span className="w-32 h-5 rounded mt-2 bg-[#353749] block" />
        </div>

        <div>
          <div className="flex flex-col mt-0.5">
            <div className="mb-2 w-32 h-5 rounded bg-[#353749]"/>
            <span className="w-28 h-5 rounded bg-[#353749]" />
          </div>

          <div className="relative">
            <div className="absolute right-1 bottom-0 w-32 h-12 bg-[#353749] rounded-xl" />
          </div>
        </div>
      </div> 
    </article>
  );
}
