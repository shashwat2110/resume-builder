<template>
    <v-container>
      <v-btn color="primary" @click="saveDetails(uid)">Save</v-btn>
      <v-layout row wrap>
        <v-flex xs6 sm6>
          <v-text-field
            label="Ttile"
            hint="CEO, Lead Developer, HR, etc."
            persistent-hint
            outline
            v-model="title"
          ></v-text-field>
        </v-flex>
        <br>
      </v-layout>
      <RTE @contentChangedRTF="updateRole" />
      <DatePicker  type="From" @dateChanged="updateDateFrom" />
      <DatePicker type="To" v-if="noTo" @dateChanged="updateDateTo"/>
      <v-checkbox
      v-model="checkbox"
      label="I currently work here"
      @change="toggleTO()"
    ></v-checkbox>
    </v-container>
    

</template>

<script>
import RTE from '@/components/generation_one/RTE.vue'
import DatePicker from '@/components/generation_one/DatePicker.vue'

var roleHTML = ""
var fromDate = ""
var toDate = ""
export default {
  name: 'Employment',
  components: {
      RTE,
      DatePicker
  },
  data: function() {
    return {
      checkbox: false,
      noTo: true,
      title: ''
    }
  },
  props: {
    uid: String
  },
  methods: {
    toggleTO: function() {
      if(this.noTo == false)
        this.noTo = true
      else 
        this.noTo = false
    },

    updateRole: function(html) {
      console.log(html)
      roleHTML = html
    },

    saveDetails: function(uid) {
      var employmentDetails = {title: this.title, roleDetails: roleHTML, from: fromDate, to: toDate}
      console.log(employmentDetails)
      this.$emit('employmentAdded', uid, employmentDetails)
    },

    updateDateFrom: function(date) {
      console.log(date)
      fromDate = date
    },
    updateDateTo: function(date) {
      console.log(date)
        toDate = date
    }
  }
}
</script>
