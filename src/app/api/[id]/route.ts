import { z } from "zod";
import { getSheetClient } from "../client";

export async function GET(
  _request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const result = await getSheetClient().spreadsheets.values.get({
    spreadsheetId: "125Dgz2B3M2fuW4-nmC2trUnEr9zDOS47agVDUQrbDrQ",
    range: "Master!A2:E",
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
    accept: match[4],
  };

  return Response.json(
    {
      status: "ok",
      data: guest,
    },
    { status: 200 }
  );
}

export async function POST(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const { accept } = z
    .object({
      accept: z.boolean(),
    })
    .parse(await request.json());

  console.log(id, accept);

  const result = await getSheetClient().spreadsheets.values.get({
    spreadsheetId: "125Dgz2B3M2fuW4-nmC2trUnEr9zDOS47agVDUQrbDrQ",
    range: "Master!A2:E",
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

  const guest: Guest = {
    rowNo: match[0],
    id: match[1],
    fullName: match[2],
    shortName: match[3],
    accept: match[4],
  };

  await getSheetClient().spreadsheets.values.update({
    spreadsheetId: "125Dgz2B3M2fuW4-nmC2trUnEr9zDOS47agVDUQrbDrQ",
    range: "Master!E" + guest.rowNo,
    valueInputOption: "RAW",
    requestBody: {
      values: [[accept]],
    },
  });

  return Response.json(
    {
      status: "ok",
    },
    { status: 200 }
  );
}
