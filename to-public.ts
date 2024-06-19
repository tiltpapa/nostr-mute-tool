// import pick from "pick";
import { EventTemplate, finalizeEvent, kinds } from "nostr-tools";
import { seckey } from "./load.ts";
import { publish } from "./lib/nostr.ts";
import { decrypt } from "./decrypt.ts";

export async function toPublic(list: string[][], merge = true) {
//  const kind10000 = await req();
//  if(merge) { // mergeする場合を実装予定
//  } else {
    const template: EventTemplate = {
        kind: kinds.Mutelist,
        tags: list,
        content: "",
        created_at: Math.floor(Date.now() / 1000)
    }
    console.debug(template);
//  }
    const event = finalizeEvent(template, seckey);
    const result = await publish(event);
    return result;
}

if (import.meta.main) {
    const list = await decrypt();
    console.log(await toPublic(list));
}