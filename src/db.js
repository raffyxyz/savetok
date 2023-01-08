import Dexie from 'dexie';

export const db = new Dexie('savetok');
db.version(1).stores({
  history: '++id, cover, title, url', // Primary key and indexed props
});
