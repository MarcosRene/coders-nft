/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { formatCurrency } from "utils/formatCurrency";
import { Ethereum } from "assets/Ethereum";
import { NFTProps } from "pages";

type CardProps = {
  listing: NFTProps;
};

export default function Card({ listing }: CardProps) {
  const router = useRouter();

  return (
    <article
      onClick={() => router.push(`/nft/${listing.id}`)}
      className="width-[24rem] h-[31rem] bg-[#242634] rounded-[1.25rem] cursor-pointer"
    >
      <img
        src={listing.image}
        alt={listing.name}
        className="rounded-[1.25rem] p-2 w-96 h-80"
      />

      <div className="mx-6 mt-4">
        <div className="mb-5">
          <strong className="text-2xl block">{listing.name}</strong>
          <span className="mt-1 text-[#93989a]">By {listing.author}</span>
        </div>

        <div>
          <span className="text-[#93989a]">Current Bid</span>

          <div className="flex mt-0.5">
            <Ethereum />
            <span className="text-xl font-semibold">
              {formatCurrency(listing.price)}
            </span>
          </div>

          <div className="relative">
            <button className="absolute right-1 bottom-0.5 px-7 py-4 bg-[#FF2748] text-white font-semibold rounded-xl hover:bg-[#ff4c6e] active:bg-[#e60032] transition-all">
              Place A Bit
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
