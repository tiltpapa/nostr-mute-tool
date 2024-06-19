import { Event, Filter, SimplePool, kinds } from "nostr-tools"
import relays from "../relays.json" with {type: "json"}
import { pubkey } from "../load.ts";

const pool = new SimplePool();

export async function req(){
    const filter: Filter = {
        kinds: [kinds.Mutelist],
        authors: [pubkey],
        limit: 1
    };
//  console.debug(filter);
    const event = await pool.get(relays, filter);
    return event;
}

export async function publish(event: Event){
    return await pool.publish(relays, event);
}