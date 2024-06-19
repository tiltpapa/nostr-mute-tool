import { nip19 } from "nostr-tools";
import "https://deno.land/std@0.224.0/dotenv/load.ts"

export const pubkey = nip19.decode(Deno.env.get("PUB_KEY")).data;
export const seckey = nip19.decode(Deno.env.get("SEC_KEY")).data;