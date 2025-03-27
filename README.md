# EntryEvents

## Introduction

> WARNING: for now, in version 1.0, EntryEvents works only with bun

EntryEvents is an event-driven system in TypeScript for handling custom events and listeners, designed to simplify event handling.<br>
It is crafted with simplicity and usability in mind, making it ideal for applications where event handling is needed without the complexity of heavy frameworks.

### Why choose EntryEvents?

- **Zero Dependencies:** EntryEvents doesn’t require any external dependencies, making it easy to integrate into any TypeScript project.

- **Asynchronous Event Support:** Emit and listen to events asynchronously using ```asemit```, ensuring compatibility with asynchronous code.

- **Event Overriding Control:** Easily control whether to override existing event listeners with the override flag when registering events.

- **Global and Instance-based Event Management:** EntryEvents provides both static (global) and instance-based event management, allowing flexibility depending on the scope of your application.

# Install

### Bun
```bun i entry-events```

# Usage

```typescript
import { EntryEvents } from 'entry-events';
const { GEntry, Entry } = EntryEvents;

GEntry.on('tell', (message: string) => {
    return "Global says: " + message;
});

console.log(GEntry.emit("tell", "Welcome on EntryEvents"));

const e = new Entry();
e.once('tell', (message: string) => {
    return "Local Entry: " + message;
});

console.log( e.emit("tell", "Here's a little example on how to use it") );
```