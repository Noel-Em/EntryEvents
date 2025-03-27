import { EntryEvents } from "../src";
const { GEntry, Entry } = EntryEvents;

GEntry.on("tell", (message: string) => {
    return "Entry says: " + message;
});

GEntry.once("start", async () => {
    console.log( GEntry.emit("tell", "Welcome on Entry!") );
    console.log( GEntry.emit("tell", "It didn't take long to make it") );
    console.log( GEntry.emit("tell", "But I did find it a good way to improve my coding skills") );
    console.log( GEntry.emit("tell", "Hope you will like it ^^") );
});

await GEntry.asemit("start"); // runs an entry in async
// await GEntry.asemit("start"); // it won't run a second time, it's a once entry and will result in an error