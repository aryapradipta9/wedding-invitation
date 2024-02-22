import { google } from "googleapis";
import { mappings } from "../submit/data";
import { z } from "zod";

export async function GET(
  _request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const pkey = Buffer.from(process.env.GOOGLE_PKEY || "", "base64").toString(
    "ascii"
  );
  const result = await google
    .sheets({
      version: "v4",
      auth: new google.auth.GoogleAuth({
        credentials: {
          private_key: pkey,
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
        },
        scopes: "https://www.googleapis.com/auth/spreadsheets",
      }),
    })
    .spreadsheets.values.get({
      spreadsheetId: "125Dgz2B3M2fuW4-nmC2trUnEr9zDOS47agVDUQrbDrQ",
      range: "Master!A2:D",
    });

  const values = result.data.values;
  const match = values?.find((v) => v[1] == id);
  if (!match) {
    return Response.json(
      {
        status: "error",
      },
      { status: 404 }
    );
  }
  const guest = {
    rowNo: match[0],
    id: match[1],
    fullName: match[2],
    shortName: match[3],
  };

  return Response.json(
    {
      status: "ok",
      data: guest,
    },
    { status: 200 }
  );
}
