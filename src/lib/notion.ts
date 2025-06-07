// lib/notion.ts
import { getEnv } from "./env";

// Ambil ID dari env dengan validasi
const NHERO = getEnv("NHERO");
const NBLOG = getEnv("NBLOG");
const NPRODUCT = getEnv("NPRODUCT");
const NHEADER = getEnv("NHEADER");
const NMETAHEAD = getEnv("NMETAHEAD");
const NBANNER = getEnv("NBANNER");

// Tipe dasar untuk item Notion
export interface NotionRow {
  id?: any;
  heading?: any;
  subHeading?: any;
  typeWriter?: any;
  desc?: any;
  button?: any;
  urlButton: any;
  image?: string | { url: string }[];
  icon?: string | { url: string }[];
  [key: string]: any; // Tambahan properti lain
}

// Fetch generic table
// export const fetchTable = async (tableId: string): Promise<NotionRow[]> => {
//   const res = await fetch(`https://notion-api.splitbee.io/v1/table/${tableId}`);
//   const data = await res.json();
//   return data;
// };

export const fetchTable = async (tableId: string): Promise<NotionRow[]> => {
  const res = await fetch(
    `https://notion-api.splitbee.io/v1/table/${tableId}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

// Fetch 1 row pertama dari table
export const fetchSingleRow = async (
  tableId: any
): Promise<NotionRow | null> => {
  const data = await fetchTable(tableId);
  return data.length > 0 ? data[0] : null;
};

// Fetch Hero
export const fetchHero = (): Promise<NotionRow | null> => {
  return fetchSingleRow(NHERO);
};

export const fetchHeader = (): Promise<NotionRow | null> => {
  return fetchSingleRow(NHEADER);
};
export const fetchMetaHead = (): Promise<NotionRow | null> => {
  return fetchSingleRow(NMETAHEAD);
};
export const fetchBanner = (): Promise<NotionRow | null> => {
  return fetchSingleRow(NBANNER);
};

// allpost

// Fetch List Portfolio
// export const fetchListPortfolio = async (): Promise<NotionRow[]> => {
//   return fetchTable(NLISTPORTFOLIO);
// };

export const fetchBlog = async (): Promise<NotionRow[]> => {
  return fetchTable(NBLOG);
};
export const fetchProduct = async (): Promise<NotionRow[]> => {
  return fetchTable(NPRODUCT);
};
