export class GEntry {
    private static entryList: Record<string, (...args: any) => any> = {};

    public static on(entryName: string, func: (...args: any[]) => any, override: boolean = false) {
        if(GEntry.entryList[entryName] && !override) throw new Error("entry `" + entryName + "` already exists");
        GEntry.entryList[entryName] = func;
    }

    public static emit(entryName: string, ...args: any[]) {
        if (!GEntry.entryList[entryName]) throw new Error(`Impossible to emit entry "${entryName}". entry does not exist`);
        return GEntry.entryList[entryName](...args);
    }

    public static off(entryName: string) {
        if(!GEntry.entryList[entryName]) return;
        delete GEntry.entryList[entryName];
    }

    public static once(entryName: string, func: (...args: any[]) => any) {
        const fWrapper = (...args: any[]) => {
            GEntry.off(entryName);
            return func(...args);
        }

        GEntry.on(entryName, fWrapper);
    }

    public static async asemit(entryName: string, ...args: any[]) {
        if (!GEntry.entryList[entryName]) throw new Error(`Impossible to emit (async) entry "${entryName}". entry does not exist`);
        return GEntry.entryList[entryName](...args);
    }
}