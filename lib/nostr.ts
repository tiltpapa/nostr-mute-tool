import { Event, Filter, SimplePool } from "nostr-tools"
import relays from "../relays.json" with {type: "json"}
import { pubkey } from "../load.ts";

const pool = new SimplePool();

export async function req(){
    const filter: Filter = {
        kinds: [10000],
        authors: [pubkey],
        limit: 1
    };
//  console.debug(filter);
    const event = await pool.get(relays, filter);
    return event;
}

export async function publish(event: Event){
    await pool.publish(relays, event);
}