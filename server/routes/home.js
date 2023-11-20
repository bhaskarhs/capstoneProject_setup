import { join, dirname } from 'path'
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const homeRoute = (req, res) => {
  res.sendFile(join(__dirname, "public", "client/build"));
};