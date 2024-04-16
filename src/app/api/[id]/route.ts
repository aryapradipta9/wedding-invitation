import { z } from "zod";
import { getSheetClient } from "../client";
import { Guest } from "@/app/entity";

export async function GET(
  _request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const result = await getSheetClient().spreadsheets.values.get({
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
    lokasiUndangan: match[3],
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
  const { accept, nama } = z
    .object({
      accept: z.boolean(),
      nama: z.string(),
    })
    .parse(await request.json());

  console.log(id, accept);

  const result = await getSheetClient().spreadsheets.values.get({
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

  const guest: Guest = {
    rowNo: match[0],
    id: match[1],
    fullName: match[2],
    lokasiUndangan: match[3],
    accept: match[4],
  };

  // await getSheetClient().spreadsheets.values.update({
  //   spreadsheetId: "125Dgz2B3M2fuW4-nmC2trUnEr9zDOS47agVDUQrbDrQ",
  //   range: "Master!F" + guest.rowNo,
  //   valueInputOption: "RAW",
  //   requestBody: {
  //     values: [[accept]],
  //   },
  // });

  await getSheetClient().spreadsheets.values.append({
    spreadsheetId: "125Dgz2B3M2fuW4-nmC2trUnEr9zDOS47agVDUQrbDrQ",
    range: "Kehadiran!A:E",
    insertDataOption: "INSERT_ROWS",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[new Date(), guest.id, guest.lokasiUndangan, nama, accept]],
    },
  });

  return Response.json(
    {
      status: "ok",
    },
    { status: 200 }
  );
}
