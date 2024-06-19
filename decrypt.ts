import { nip04 } from "nostr-tools";
import { req } from "./lib/nostr.ts";
import { pubkey, seckey } from "./load.ts";

export async function decrypt(){
    const kind10000 = await req();
    const plain = await nip04.decrypt(seckey, pubkey, kind10000?.content);
    return JSON.parse(plain);
}

if (import.meta.main) {
    console.log(await decrypt());
}
