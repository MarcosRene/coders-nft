/* eslint-disable import/no-anonymous-default-export */
class ListingMapper {
  toDomain(persistenceListing) {
    return {
      id: persistenceListing.asset.id,
      name: persistenceListing.asset.name.toString(),
      description: persistenceListing.asset.description,
      image: persistenceListing.asset.image,
      author: persistenceListing.creatorAddress.slice(0, 10),
      price: Number(persistenceListing.currencyValuePerToken.displayValue),
    };
  }
}

export default new ListingMapper();
