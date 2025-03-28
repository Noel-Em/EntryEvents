export class Entry {
    private entryList: Record<string, (...args: any) => any> = {};

    on(entryName: string, callback: (...args: any[]) => any, override: boolean = false) {
        if(this.entryList[entryName] && !override) throw new Error("entry `" + entryName + "` already exists");
        this.entryList[entryName] = callback;
    }

    off(entryName: string) {
        if(!this.entryList[entryName]) return;
        delete this.entryList[entryName];
    }

    once(entryName: string, callback: (...args: any[]) => any) {
        const cWrapper = (...args: any[]) => {
            this.off(entryName);
            return callback(...args);
        }

        this.on(entryName, cWrapper);
    }

    emit(entryName: string, ...args: any[]) {
        if(!this.entryList[entryName]) throw new Error("Impossible to emit entry `" + entryName + "`. Entry does not exists");
        return this.entryList[entryName](...args);
    }

    async asemit(entryName: string, ...args: any[]) {
        if(!this.entryList[entryName]) throw new Error("Impossible to emit (async) entry `" + entryName + "`. Entry does not exists");
        return this.entryList[entryName](...args);
    }
}