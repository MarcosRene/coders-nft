import Head from "next/head";
import { ChangeEvent, useMemo, useState } from "react";

import Card from "components/Card";
import Container from "components/Container";

export type NFTProps = {
  id: string;
  name: string;
  price: string;
  author: string;
  image: string;
  description: string;
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNfts = useMemo(
    () =>
      nftsMock.filter((nft) =>
        nft.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container className="min-w-full">
      <Head>
        <title>Coders NFT</title>
      </Head>

      <nav className="flex justify-between items-baseline">
        <h2 className="text-5xl font-bold mt-24">Discovery</h2>

        <input
          placeholder="Search item"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="h-12 w-64 p-4 border border-[#242634] rounded-xl placeholder-[#93989A] bg-[#20222E]"
        />
      </nav>

      <hr className="w-full border-[#242634] mt-12" />

      <div className="flex-col items-start gap-7 mt-12">
        <h2 className="text-5xl font-bold">Popular Bid</h2>

        <div className="flex flex-wrap items-start gap-7 mt-7 min-h-[50%]">
          {filteredNfts.map((nft) => (
            <Card key={nft.id} nft={nft} />
          ))}
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
