import {
  Connection,
  clusterApiUrl
} from "@solana/web3.js";

export const solanaConnection =
  new Connection(
    clusterApiUrl("devnet"),
    "confirmed"
  );
