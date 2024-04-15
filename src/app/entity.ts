export type Guest = {
  rowNo: number;
  id: string;
  fullName: string;
  shortName: string;
  accept?: boolean;
  lokasiUndangan: lokasiUndangan;
};

type ConfigType = {
  namaEvent: string;
  tanggal: number;
  waktu: string;
  tempat: string;
  alamat: string;
  mapsLink: string;
  showAlamatOnHadiah: boolean;
  withGopay: boolean;
  showFamily: boolean;
  showGCal: boolean;
  useBGM: boolean;
};

enum lokasiUndangan {
  jakarta = "jakarta",
  bali = "bali",
}

export const configUndangan: Record<lokasiUndangan, ConfigType> = {
  jakarta: {
    namaEvent: "Resepsi Pernikahan",
    tanggal: 18,
    waktu: "18.00 - 20.00 WIB",
    tempat: "The Gallery CIBIS Park",
    alamat: "Jl.TB Simatupang No. 2 Cilandak Timur, Jakarta Selatan",
    mapsLink: "https://maps.app.goo.gl/A9GikxuTd7SJpn5o8",
    showAlamatOnHadiah: true,
    showFamily: true,
    withGopay: true,
    showGCal: true,
    useBGM: true,
  },
  bali: {
    namaEvent: "Acara Pawiwahan (Pernikahan)",
    tanggal: 10,
    waktu: "Upacara Adat 08.00 - 10.00 WITA\nResepsi 10.00 - 14.00 WITA",
    tempat: "Griya Taksu Event Space",
    alamat:
      "Jl. Ir. Sutami, Br. Medahan, Kemenuh, Sukawati Gianyar, Bali 80582",
    mapsLink: "https://maps.app.goo.gl/E65QEiBc1uRhnXA57",
    showAlamatOnHadiah: false,
    showFamily: false,
    withGopay: false,
    showGCal: false,
    useBGM: false,
  },
};
