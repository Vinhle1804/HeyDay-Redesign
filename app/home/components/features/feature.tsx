import AuctionHouse from "./auction-house/auction-house";
import GamefiMechanism from "./gamefiMechanism/gamefi_mechanism";
import Stone from "./stone/stone";

export default function Features() {
  return (
    <div>
      <GamefiMechanism/>
      <Stone/>
      <AuctionHouse/>
    </div>
  )
}
