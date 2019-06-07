<template>
    <v-container>
      <v-btn color="primary" @click="saveDetails(uid)">Save</v-btn>
      <v-layout row wrap>
         <v-flex xs12 sm6 d-flex>
        <v-select
          :items="degreeItems"
          label="Degree Type"
          outline
        ></v-select>
      </v-flex>
      <v-text-field
            label="Major/ Field of Study"
            hint="CE/ EE/ CSE"
            persistent-hint
            outline
            v-model="major"
          ></v-text-field>
          <v-text-field
            label="GPA"
            hint="5.4/10, 9.1/10"
            persistent-hint
            outline
            v-model="gpa"
          ></v-text-field>
        <br>
      </v-layout>
      <DatePicker  type="From" @dateChanged="updateDateFrom" />
      <DatePicker type="To" v-if="noTo" @dateChanged="updateDateTo"/>
      <v-checkbox
      v-model="checkbox"
      label="I currently study here"
      @change="toggleTO()"
    ></v-checkbox>
    </v-container>
    

</template>

<script>
import DatePicker from '@/components/generation_one/DatePicker.vue'

var roleHTML = ""
var fromDate = ""
var toDate = ""
export default {
  name: 'Education',
  components: {
      DatePicker
  },
  data: function() {
    return {
      checkbox: false,
      noTo: true,
      college: '',
      major: '',
      gpa:'',
      degreeItems: ['Foo', 'Bar', 'Fizz', 'Buzz']
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
      var educationDetails = {title: this.title, roleDetails: roleHTML, from: fromDate, to: toDate}
      console.log(educationDetails)
      this.$emit('educationAdded', uid, educationDetails)
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
