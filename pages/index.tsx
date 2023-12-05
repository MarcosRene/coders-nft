import Head from "next/head";
import { useContract, useDirectListings } from "@thirdweb-dev/react";
import { ChangeEvent, useMemo, useState } from "react";

import Listing from "services/mappers/Listing";

import Card from "components/Card";
import CardSkeleton from "components/CardSkeleton";
import Container from "components/Container";
import MetaTags from "components/MetaTags";

export type NFTProps = {
  id: string;
  name: string;
  price: number;
  author: string;
  image: string;
  description: string;
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const { contract } = useContract(
    process.env.NEXT_PUBLIC_SMART_CONTRACT_MARKETPLACE,
    "marketplace-v3"
  );

  const {
    data: directListings,
    isLoading,
    error,
  } = useDirectListings(contract);

  const formatListings =
    directListings &&
    directListings.map((directListings) => Listing.toDomain(directListings));

  const filteredListings = useMemo(
    () =>
      formatListings &&
      formatListings.filter((nft) =>
        nft.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, formatListings]
  );

  function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container className="min-w-full">
      <MetaTags title="NFTs" />

      <nav className="flex flex-wrap justify-between items-baseline">
        <h2 className="text-5xl font-bold mt-24 mb-6 md:mb-0">Discovery</h2>

        <input
          placeholder="Search item"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="h-12 w-full md:w-64 p-4 border border-[#242634] rounded-xl drop-shadow-md placeholder-[#93989A] bg-[#20222E]"
        />
      </nav>

      <hr className="w-full border-[#242634] mt-12" />

      <div className="flex-col items-start gap-7 mt-12">
        <h2 className="text-5xl font-bold">Popular Bid</h2>

        <div className="flex flex-wrap items-start gap-7 mt-7 min-h-[50%]">
          {isLoading && !error ? (
            <>
              {Array.from(Array(5).keys()).map((n) => (
                <CardSkeleton key={n} />
              ))}
            </>
          ) : (
            <>
              {filteredListings?.map((listing) => (
                <Card key={listing.id} listing={listing} />
              ))}
            </>
          )}
        </div>
      </div>
    </Container>
  );
}

export const nftsMock = [
  {
    id: "1",
    name: "Lil Pudgy #8305",
    price: "0.1",
    author: "AcceptMinePlz",
    image:
      "https://i.seadn.io/s/raw/files/a60ef074a22f0aa0f1951c67794c4009.png?auto=format&dpr=1&w=1000",
    description: "NFT Description",
  },
  {
    id: "2",
    name: "Lil Pudgy #1243",
    price: "0.1",
    author: "63A65F",
    image:
      "https://i.seadn.io/gcs/files/1e1abfcfcb93727cba2d8862293aa336.png?auto=format&dpr=1&w=1000",
    description: "NFT Description",
  },
  {
    id: "3",
    name: "Lil Pudgy #559",
    price: "0.1",
    author: "AcceptMinePlz",
    image:
      "https://i.seadn.io/gcs/files/c7dee3c571fa6a3bcba0ce9594d7cd59.png?auto=format&dpr=1&w=1000",
    description: "NFT Description",
  },
  {
    id: "4",
    name: "Lil Pudgy #5988",
    price: "0.1",
    author: "Nftinitcom_ugurnft",
    image:
      "https://i.seadn.io/gcs/files/28d480a7b788a2b31468c363dae694c5.png?auto=format&dpr=1&w=1000",
    description: "NFT Description",
  },
];
