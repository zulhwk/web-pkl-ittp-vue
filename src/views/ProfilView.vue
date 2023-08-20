<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-text>
          <h3 class="mb-3 text-orange">Identitas Mahasiswa PKL</h3>
          <v-divider class="text-orange border-opacity-100"></v-divider>
          <div class="mt-10">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100" height="100" rx="4" fill="#E88918" />
              <g clip-path="url(#clip0_897_240)">
                <path
                  d="M39.0334 38.3333C39.0334 32.2741 43.9408 27.3667 50.0001 27.3667C56.0593 27.3667 60.9667 32.2741 60.9667 38.3333C60.9667 44.3926 56.0593 49.3 50.0001 49.3C43.9408 49.3 39.0334 44.3926 39.0334 38.3333ZM27.3667 64.5833C27.3667 62.9009 28.204 61.3753 29.6922 60.0018C31.1852 58.6239 33.2862 57.4468 35.6734 56.4904C40.449 54.5773 46.1938 53.6167 50.0001 53.6167C53.8063 53.6167 59.5512 54.5773 64.3267 56.4904C66.714 57.4468 68.815 58.6239 70.3079 60.0018C71.7961 61.3753 72.6334 62.9009 72.6334 64.5833V72.6333H27.3667V64.5833Z"
                  stroke="#F4F4F4"
                  stroke-width="1.4"
                />
              </g>
              <g clip-path="url(#clip1_897_240)">
                <path
                  d="M90 7H76C74.89 7 74 7.9 74 9V23C74 24.1 74.89 25 76 25H90C91.1 25 92 24.1 92 23V9C92 7.9 91.1 7 90 7ZM88 17H84V21H82V17H78V15H82V11H84V15H88V17Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_897_240">
                  <rect
                    width="60"
                    height="60"
                    fill="white"
                    transform="translate(20 20)"
                  />
                </clipPath>
                <clipPath id="clip1_897_240">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(71 4)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <h4 class="my-2 font-weight-medium">Nama Mahasiswa</h4>
            <v-text-field variant="outlined" value="THORIQ AZIZ" />
          </div>
          <div>
            <h4 class="my-2 font-weight-medium">Nim</h4>
            <v-text-field variant="outlined" value="18103092" />
          </div>
          <div>
            <h4 class="my-2 font-weight-medium">Program Studi</h4>
            <v-text-field variant="outlined" value="S1 Sistem Informasi" />
          </div>
          <div>
            <h4 class="my-2 font-weight-medium">Nomor HP *</h4>
            <v-text-field variant="outlined" value="081360631525" />
          </div>
          <div>
            <h4 class="my-2 font-weight-medium">Email *</h4>
            <v-text-field
              variant="outlined"
              value="18103092@ittelkom-pwt.ac.id"
            />
          </div>
          <div>
            <h4 class="my-2 font-weight-medium">Nama Dosen Pembimbing</h4>
            <v-text-field variant="outlined" value="THORIQ AZIZ" />
          </div>
          <v-btn
            color="#E88918"
            class="text-white text-capitalize float-right my-6"
            >Simpan Perubahan</v-btn
          >
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card>
        <v-card-text>
          <div class="d-flex justify-space-between">
            <h3 class="mb-3 text-orange">Mitra PKL</h3>
            <span style="color: #ff4040; font-size: 10px"
              >Input data hanya dapat dilakukan 1 kali, untuk edit data hubungi
              admin.</span
            >
          </div>
          <v-divider class="text-orange border-opacity-100"></v-divider>
          <div>
            <h4 class="my-2 font-weight-medium">Pilih Mitra *</h4>
            <v-text-field variant="outlined" />
          </div>
          <div>
            <h4 class="my-2 font-weight-medium">Nama Pembimbing Lapangan *</h4>
            <v-text-field variant="outlined" />
          </div>
          <div>
            <h4 class="my-2 font-weight-medium">Deskripsi Pekerjaan Saya *</h4>
            <v-text-field variant="outlined" />
          </div>
          <div>
            <h4 class="my-2 font-weight-medium">Tanggal Mulai - Selesai *</h4>
            <v-text-field variant="outlined" />
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
