export class Entry {
    private entryList: Record<string, (...args: any) => any> = {};

    on(entryName: string, func: (...args: any[]) => any, override: boolean = false) {
        if(this.entryList[entryName] && !override) throw new Error("entry `" + entryName + "` already exists");
        this.entryList[entryName] = func;
    }

    off(entryName: string) {
        if(!this.entryList[entryName]) return;
        delete this.entryList[entryName];
    }

    once(entryName: string, func: (...args: any[]) => any) {
        const fWrapper = (...args: any[]) => {
            func(...args);
            this.off(entryName);
        }

        this.on(entryName, fWrapper);
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