<template>
  <v-dialog
      v-model="dialog"
      persistent
      :width="width"
    >
      <v-card>
        <v-card-title class="text-h5 d-flex justify-space-between align-center items-center">
          {{ title }}
          <v-btn icon elevation="0" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider class="text-orange border-opacity-100"></v-divider>
        <slot name="content" />
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: "ITTPDialog",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'Title',
      required: true,
    },
    width: {
      type: [String, Number],
      default: 'auto'
    }
  },
  computed: {
    dialog: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  }
}
</script>