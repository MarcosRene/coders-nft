/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  useContract,
  useDirectListings,
  useDirectListing,
  useNFT,
  useAddress,
} from "@thirdweb-dev/react";
import toast from "react-hot-toast";

import Listing from "services/mappers/Listing";

import Card from "components/Card";
import Container from "components/Container";
import DetailsSkeleton from "components/DetailsSkeleton";
import MetaTags from "components/MetaTags";
import Spinner from "components/Spinner";

export default function Details() {
  const {
    query: { id: nftId },
  } = useRouter();

  const [isLoadingPurchase, setIsLoadingPurchase] = useState(false);

  const { contract } = useContract(
    process.env.NEXT_PUBLIC_SMART_CONTRACT_MARKETPLACE as string,
    "marketplace-v3"
  );

  const { data: directListings } = useDirectListings(contract);

  const {
    data: listing,
    isLoading,
    error,
  } = useDirectListing(contract, Number(nftId));

  const { contract: contractAddress } = useContract(
    listing?.assetContractAddress
  );

  const { data: nft } = useNFT(contractAddress, listing?.asset.id);

  const walletAddress = useAddress();

  const isOwner = walletAddress && walletAddress === nft?.owner;
  const hasDisabled = isLoadingPurchase || isOwner || listing?.quantity === "0";

  const formatListings =
    directListings &&
    directListings.map((directListings) => Listing.toDomain(directListings));

  const formatListing = listing && !isLoading && Listing.toDomain(listing);

  async function handleBuyNft() {
    try {
      setIsLoadingPurchase(true);

      await contract.directListings.buyFromListing(formatListing.id, 1);

      toast.success("Your purchase was successful!");
    } catch (error) {
      toast.error(`There was an error trying to buy ${formatListing.name} ntf`);
    } finally {
      setIsLoadingPurchase(false);
    }
  }

  return (
    <Container>
      <MetaTags title={formatListing?.name} />

      <div className="mt-8 md:mt-24 flex flex-wrap lg:flex-nowrap">
        {isLoading && !error ? (
          <DetailsSkeleton />
        ) : (
          <>
            <img
              src={formatListing.image}
              alt={formatListing.name}
              className="w-full max-w-xl max-h-max rounded-[1.25rem]"
            />

            <div className="w-full min-w-xl mt-8 lg:mt-0 lg:ml-10 text-justify">
              <h1 className="text-5xl font-bold">{formatListing.name}</h1>
              <span className="text-[#93989A] mt-4 block">
                {formatListing.description}
              </span>

              <hr className="w-full border-[#242634] mt-8 mb-4" />

              <div className="flex flex-col">
                <span className="text-[#93989A]">Owner</span>
                <span>
                  {nft?.owner.slice(0, 10)} {isOwner && "(You)"}
                </span>
              </div>

              <hr className="w-full border-[#242634] mt-8 mb-4" />

              <button
                onClick={handleBuyNft}
                className={`px-12 py-4 bg-[#FF2748] text-white font-semibold rounded-xl transition-all ${
                  hasDisabled
                    ? "bg-[#ff4c6e] cursor-not-allowed"
                    : "hover:bg-[#ff4c6e] active:bg-[#e60032]"
                }`}
                disabled={hasDisabled}
              >
                {isLoadingPurchase ? <Spinner /> : "Buy"}
              </button>
            </div>
          </>
        )}
      </div>

      <div className="mt-24">
        <h2 className="text-4xl mt-24 font-semibold">More Works</h2>

        <div className="flex flex-wrap items-start gap-4 mt-7">
          {formatListings &&
            formatListings
              .slice()
              .filter((item) => item.id !== nftId)
              .map((nft) => <Card key={nft.id} listing={nft} />)}
        </div>
      </div>
    </Container>
  );
}
