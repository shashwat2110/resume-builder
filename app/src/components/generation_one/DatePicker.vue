<template>
    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
        data-app
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            :label="type"
            prepend-icon="event"
            readonly
            v-on="on"
            max-width="5px"
          ></v-text-field>
        </template>
        <v-date-picker @change="modifyDate()" v-model="date" @input="menu = false"></v-date-picker>
      </v-menu>
</template>

<script>
export default {
    data: function() {
      return {
      date: new Date().toISOString().substr(0, 10),
      menu: false
    }
  },
  props: {
    type: String
  },
  methods: {
    modifyDate: function(type) {
      this.$emit("dateChanged", this.date)
    }
  }
    
}
</script>
