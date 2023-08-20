<template>
  <v-card>
    <v-card-text>
      <div class="d-flex justify-space-between align-center">
        <h3 class="text-orange">Laporan Harian</h3>
        <div class="py-4">
          <v-btn
            prepend-icon="mdi-plus"
            color="#E88918"
            class="mr-2 text-white text-capitalize"
            @click="showDialogAdd = true"
            >Tambah</v-btn
          >
          <v-btn
            prepend-icon="mdi-printer"
            color="#E88918"
            class="text-white text-capitalize"
            >Cetak</v-btn
          >
        </div>
      </div>
      <v-divider class="text-orange border-opacity-100"></v-divider>
      <table class="mt-5">
        <tr>
          <th class="text-left" style="width: 50px">No.</th>
          <th class="text-left">Laporan</th>
        </tr>
        <tr v-for="data in 9" :key="data">
          <td>{{ data }}</td>
          <td>
            <div class="d-flex">
              <div class="mr-2 font-weight-bold">09-08-2021</div>
              <div style="color: #00c213; font-weight: 600">
                Approve by Ardianto Firdaus
              </div>
            </div>
            Editing Video Daily Activity (content) Editing Video Progress Design
            Interior (content) Documentation.
          </td>
        </tr>
      </table>
    </v-card-text>
    <ITTPDialog
      v-model="showDialogAdd"
      :width="800"
      title="Tambah Laporan Harian"
    >
      <template #content>
        <v-card-text>
          <div>
            <h4 class="my-2 font-weight-medium">Tanggal</h4>
            <v-text-field variant="outlined"></v-text-field>
          </div>
          <div>
            <h4 class="my-2 font-weight-medium">Tanggal Mulai - Selesai *</h4>
            <v-textarea variant="outlined"></v-textarea>
          </div>
          <v-btn
            color="#E88918"
            class="text-white text-capitalize float-right my-6"
            @click="showDialogAdd = false"
            >Tutup</v-btn
          >
        </v-card-text>
      </template>
    </ITTPDialog>
  </v-card>
</template>

<script>
import ITTPDialog from "../components/ITTPDialog.vue";
export default {
  components: {
    ITTPDialog,
  },
  data() {
    return {
      showDialogAdd: false,
    };
  },
};
</script>
