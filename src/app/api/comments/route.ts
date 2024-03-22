import { z } from "zod";
import { getSheetClient } from "../client";

export async function GET(_request: Request) {
  const result = await getSheetClient().spreadsheets.values.get({
    spreadsheetId: "125Dgz2B3M2fuW4-nmC2trUnEr9zDOS47agVDUQrbDrQ",
    range: "Komentar!A2:C",
  });

  const values = result.data.values;

  return Response.json(
    {
      status: "ok",
      data: values?.map((v) => {
        return {
          timestamp: v[0],
          name: v[1],
          comment: v[2],
        };
      }),
    },
    { status: 200 }
  );
}

export async function POST(request: Request, _params: any) {
  const { nama, komentar } = z
    .object({
      nama: z.string(),
      komentar: z.string(),
    })
    .parse(await request.json());

  console.log(nama, komentar);

  await getSheetClient().spreadsheets.values.append({
    spreadsheetId: "125Dgz2B3M2fuW4-nmC2trUnEr9zDOS47agVDUQrbDrQ",
    range: "Komentar!A:C",
    insertDataOption: "INSERT_ROWS",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[new Date(), nama, komentar]],
    },
  });

  return Response.json(
    {
      status: "ok",
    },
    { status: 200 }
  );
}
