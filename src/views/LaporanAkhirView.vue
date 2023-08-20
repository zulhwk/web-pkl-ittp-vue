<template>
  <v-card>
    <v-card-text>
      <div class="d-flex justify-space-between align-center">
        <h3 class="text-orange">Laporan Akhir</h3>
        <div class="py-4">
          <v-btn prepend-icon="mdi-plus" color="#E88918" class="mr-2 text-white text-capitalize">Tambah</v-btn>
          <v-btn prepend-icon="mdi-printer" color="#E88918" class="text-white text-capitalize">Cetak</v-btn>
        </div>
      </div>
      <v-divider class="text-orange border-opacity-100"></v-divider>
      <table class="mt-5">
        <tr>
          <th class="text-left" style="width: 50px;">No.</th>
          <th class="text-left">Laporan</th>
        </tr>
        <tr v-for="data in 9" :key="data">
          <td>{{ data }}</td>
          <td>
            <div class="d-flex">
              <div class="mr-2 font-weight-bold">09-08-2021</div>
              <div style="color: #00C213; font-weight: 600;">Approve by Ardianto Firdaus</div>
            </div>
            Editing Video Daily Activity (content) Editing Video Progress Design Interior (content) Documentation.
          </td>
        </tr>
      </table>
    </v-card-text>
  </v-card>
</template>