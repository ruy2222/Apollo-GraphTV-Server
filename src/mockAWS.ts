import * as fs from 'fs';
import * as path from 'path';

const dbPath = path.join(__dirname, 'db.json');

export const getTVShows = async () => {
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  return db.tvShows;
};
