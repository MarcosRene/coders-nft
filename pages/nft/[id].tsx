/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import Card from "components/Card";
import Container  from "components/Container";

import { nftsMock } from "pages";

export default function Details() {
  const { query } = useRouter();

  const nft = nftsMock.find((nft) => nft.id === query.id);

  if (!nft) return null;

  return (
    <Container>
      <Head>
        <title>{nft.id} NFT - Details Page</title>
      </Head>

      <div className="mt-24 flex">
        <img
          src={nft.image}
          alt={nft.name}
          className="rounded-[1.25rem] w-[40rem] h-auto"
        />

        <div className="ml-10 max-w-50%">
          <h1 className="text-5xl font-bold">{nft.name}</h1>
          <span className="text-[#93989A] mt-4 block">{nft.description}</span>

          <hr className="w-full border-[#242634] mt-8 mb-4" />

          <div className="flex flex-col">
            <span className="text-[#93989A]">Creator</span>
            <span>{nft.author}</span>
          </div>

          <hr className="w-full border-[#242634] mt-8 mb-4" />

          <button className="px-12 py-4 bg-[#FF2748] text-white font-semibold rounded-xl hover:bg-[#ff4c6e] active:bg-[#e60032] transition-all">
            Place a Bit
          </button>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-4xl mt-24 font-semibold">More Works</h2>

        <div className="flex flex-wrap items-start gap-4 mt-7">
          {nftsMock
            .slice()
            .filter((item) => item.id !== nft.id)
            .map((nft) => (
              <Card key={nft.id} nft={nft} />
            ))}
        </div>
      </div>
    </Container>
  );
}
