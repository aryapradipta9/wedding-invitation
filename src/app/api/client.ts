import { google } from "googleapis";

export function getSheetClient() {
  const pkey = Buffer.from(process.env.GOOGLE_PKEY || "", "base64").toString(
    "ascii"
  );
  return google.sheets({
    version: "v4",
    auth: new google.auth.GoogleAuth({
      credentials: {
        private_key: pkey,
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
      },
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    }),
  });
}
