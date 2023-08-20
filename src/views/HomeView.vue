<script>
import IconStar from "@/components/icons/IconStar.vue";
import ITTPDialog from "../components/ITTPDialog.vue";
export default {
  name: "DashboardPage",
  components: {
    IconStar,
    ITTPDialog
  },
  data() {
    return {
      laporan: [
        {
          date: "09-08-2021",
          content:
            "Editing Video Daily Activity (content) Editing Video Progress Design Interior (content) Documentation.",
        },
        {
          date: "09-08-2021",
          content:
            "Editing Video Daily Activity (content) Editing Video Progress Design Interior (content) Documentation.",
        },
        {
          date: "09-08-2021",
          content:
            "Editing Video Daily Activity (content) Editing Video Progress Design Interior (content) Documentation.",
        },
        {
          date: "09-08-2021",
          content:
            "Editing Video Daily Activity (content) Editing Video Progress Design Interior (content) Documentation.",
        },
        {
          date: "09-08-2021",
          content:
            "Editing Video Daily Activity (content) Editing Video Progress Design Interior (content) Documentation.",
        },
      ],
      pengampu: [
        {
          name: "M.Yoka Fathoni, S.Kom.,M.Kom (Dosen Pembimbing)",
          email: "myokafathoni@ittelkom-pwt.ac.id",
          phone: "085267755595",
          address: "Institut Teknologi Telkom Purwokerto",
          address_detail:
            "Jl. DI Panjaitan No.128, Karangreja, Purwokerto Kidul, Kec. Purwokerto Sel., Kabupaten Banyumas, Jawa Tengah 53147(0281) 641629",
        },
        {
          name: "Ardianto Firdaus (Pembimbing Lapangan)",
          email: "18103092@ittelkom-pwt.ac.id",
          phone: "085267755595",
          address: "-",
          address_detail: "-",
        },
        {
          name: "Admin SI (Admin)",
          email: "cepi@ittelkom-pwt.ac.id",
          phone: "085771859137",
          address: "Institut Teknologi Telkom Purwokerto",
          address_detail:
            "Jl. DI Panjaitan No.128, Karangreja, Purwokerto Kidul, Kec. Purwokerto Sel., Kabupaten Banyumas, Jawa Tengah 53147(0281) 641629",
        },
      ],
      showDialogNilai1: false,
      showDialogNilai2: false,
      showDialogNilaiAkhir: false,
    };
  },
};
</script>

<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mb-5">
          <v-card-text>
            <v-row class="mb-3">
              <v-col cols="12" md="3">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="100" height="100" rx="4" fill="#E88918" />
                  <g clip-path="url(#clip0_924_1730)">
                    <path
                      d="M39.0333 38.3333C39.0333 32.2741 43.9407 27.3667 50 27.3667C56.0592 27.3667 60.9666 32.2741 60.9666 38.3333C60.9666 44.3926 56.0592 49.3 50 49.3C43.9407 49.3 39.0333 44.3926 39.0333 38.3333ZM27.3666 64.5833C27.3666 62.9008 28.2039 61.3753 29.6921 60.0018C31.1851 58.6238 33.2861 57.4467 35.6733 56.4904C40.4489 54.5773 46.1937 53.6167 50 53.6167C53.8062 53.6167 59.551 54.5773 64.3266 56.4904C66.7138 57.4467 68.8148 58.6238 70.3078 60.0018C71.796 61.3753 72.6333 62.9008 72.6333 64.5833V72.6333H27.3666V64.5833Z"
                      stroke="#F4F4F4"
                      stroke-width="1.4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_924_1730">
                      <rect
                        width="60"
                        height="60"
                        fill="white"
                        transform="translate(20 20)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </v-col>
              <v-col cols="12" md="8">
                <h3>THORIQ AZIZ</h3>
                <div>(Vector 41 Architect and Contractor)</div>
                <div>S1 Sistem Informasi</div>
                <div>18103092@ittelkom-pwt.ac.id</div>
                <div>081360631525</div>
              </v-col>
            </v-row>
            <v-divider class="text-orange border-opacity-100"></v-divider>
            <v-row class="my-3">
              <v-col>
                <div class="d-flex">
                  <div>
                    <IconStar />
                  </div>
                  <div class="ml-2" style="cursor: pointer;" @click="showDialogNilai1 = true">
                    <h6 style="font-size: 12px;">Nilai N1</h6>
                    <span class="text-orange font-weight-bold">94.7</span>
                  </div>
                </div>
              </v-col>
              <v-col>
                <div class="d-flex">
                  <div>
                    <IconStar />
                  </div>
                  <div class="ml-2" style="cursor: pointer;" @click="showDialogNilai2 = true">
                    <h6 style="font-size: 12px;">Nilai N2</h6>
                    <span class="text-orange font-weight-bold">94.7</span>
                  </div>
                </div>
              </v-col>
              <v-col>
                <div class="d-flex">
                  <div>
                    <IconStar color="#E88918" />
                  </div>
                  <div class="ml-2" style="cursor: pointer;" @click="showDialogNilaiAkhir = true">
                    <h6 style="font-size: 12px;">Nilai Total</h6>
                    <span class="text-orange font-weight-bold">94.7</span>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card class="mb-5">
          <v-card-text>
            <v-card
              v-for="(data, key) in pengampu"
              :key="key"
              elevation="0"
              color="#E88918"
              class="text-white my-3"
            >
              <v-card-text>
                <v-row>
                  <v-col md="3">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="100" height="100" rx="4" fill="white" />
                      <g clip-path="url(#clip0_924_1589)">
                        <path
                          d="M39.0333 38.3333C39.0333 32.2741 43.9407 27.3667 50 27.3667C56.0592 27.3667 60.9666 32.2741 60.9666 38.3333C60.9666 44.3926 56.0592 49.3 50 49.3C43.9407 49.3 39.0333 44.3926 39.0333 38.3333ZM27.3666 64.5833C27.3666 62.9009 28.2039 61.3753 29.6921 60.0018C31.1851 58.6239 33.2861 57.4468 35.6733 56.4904C40.4489 54.5773 46.1937 53.6167 50 53.6167C53.8062 53.6167 59.551 54.5773 64.3266 56.4904C66.7138 57.4468 68.8148 58.6239 70.3078 60.0018C71.796 61.3753 72.6333 62.9009 72.6333 64.5833V72.6333H27.3666V64.5833Z"
                          stroke="#E88918"
                          stroke-width="1.4"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_924_1589">
                          <rect
                            width="60"
                            height="60"
                            fill="white"
                            transform="translate(20 20)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </v-col>
                  <v-col md="8">
                    <h3>{{ data.name }}</h3>
                    <div>S1 Sistem Informasi</div>
                    <div>{{ data.email }}</div>
                    <div>{{ data.phone }}</div>
                    <div class="mt-2">
                      <h5>{{ data.address }}</h5>
                      <p>{{ data.address_detail }}</p>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-text>
            <h3 class="mb-3 text-orange">Laporan Harian</h3>
            <v-divider class="text-orange border-opacity-100"></v-divider>
            <!-- TABLE -->
            <table class="mt-5 mb-10" style="width: 100%">
              <tr>
                <th style="text-align: left; width: 50px;">No.</th>
                <th style="text-align: left">Laporan</th>
              </tr>
              <tr v-for="data in 9" :key="data">
                <td>{{ data }}</td>
                <td>
                  <div class="font-weight-bold">09-08-2021</div>
                  <p>Editing Video Daily Activity (content) Editing Video Progress Design Interior (content) Documentation.</p>
                </td>
              </tr>
            </table>
            <v-btn color="#E88918" class="float-right mb-5 mt-10 text-capitalize text-white"
              >Lihat Detail</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- NILAI N1 -->
    <ITTPDialog v-model="showDialogNilai1" :width="800" title="THORIQ AZIZ">
      <template #content>
        <v-card-text>
          <table style="width: 100%;">
            <tr>
              <th class="text-left">#</th>
              <th class="text-left">Komponen</th>
              <th class="text-left">Hasil</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Kehadiran</td>
              <td>95</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Kedisiplinan</td>
              <td>95</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Tanggung Jawab</td>
              <td>95</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Ketekunan</td>
              <td>95</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Sopan Santun</td>
              <td>95</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Kreatif</td>
              <td>95</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Inovatif</td>
              <td>95</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Daya Juang</td>
              <td>95</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Percaya Diri</td>
              <td>95</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Persiapan Kerja</td>
              <td>95</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Pelaksanaan Kerja</td>
              <td>95</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Hasil Kerja</td>
              <td>95</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Kerjasama dalam tim</td>
              <td>95</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Hubungan dengan atasan</td>
              <td>95</td>
            </tr>
            <tr>
              <td>15</td>
              <td>Adaptasi</td>
              <td>95</td>
            </tr>
          </table>
          <v-btn
            color="#E88918"
            class="text-white text-capitalize float-right my-6"
            @click="showDialogNilai1 = false"
            >Tutup</v-btn
          >
        </v-card-text>
      </template>
    </ITTPDialog>
    <!-- NILAI N2 -->
    <ITTPDialog v-model="showDialogNilai2" :width="800" title="THORIQ AZIZ">
      <template #content>
        <v-card-text>
          <table style="width: 100%;">
            <tr>
              <th class="text-left">#</th>
              <th class="text-left">Komponen</th>
              <th class="text-left">Nilai</th>
              <th class="text-left">Nilai Angka</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Keruntutan (30%) (30%)</td>
              <td>80</td>
              <td>24</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Kelancaran (30%) (30%)</td>
              <td>80</td>
              <td>24</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Kelayakan (20%) (20%)</td>
              <td>80</td>
              <td>24</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Sikap (20%) (20%)</td>
              <td>80</td>
              <td>24</td>
            </tr>
          </table>
          <v-btn
            color="#E88918"
            class="text-white text-capitalize float-right my-6"
            @click="showDialogNilai2 = false"
            >Tutup</v-btn
          >
        </v-card-text>
      </template>
    </ITTPDialog>
    <!-- NILAI TOTAL -->
    <ITTPDialog v-model="showDialogNilaiAkhir" :width="900" title="THORIQ AZIZ">
      <template #content>
        <v-card-text>
          <table style="width: 100%;">
            <tr>
              <th class="text-left">Komponen</th>
              <th class="text-left">Nilai</th>
              <th class="text-left">Nilai Angka</th>
            </tr>
            <tr>
              <td>Nilai Kinerja oleh Pembimbing Lapangan (N1) <b>40%</b></td>
              <td>94.7</td>
              <td>37.88</td>
            </tr>
            <tr>
              <td>Nilai Naskah dan Uji Lisan Laporan Akhir oleh Dosen Pembimbing PKL/KP (N2) <b>60%</b></td>
              <td>78.0</td>
              <td>46.8</td>
            </tr>
          </table>
          <v-btn
            color="#E88918"
            class="text-white text-capitalize float-right my-6"
            @click="showDialogNilaiAkhir = false"
            >Tutup</v-btn
          >
        </v-card-text>
      </template>
    </ITTPDialog>
  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
}

td {
  padding: 10px 5px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
