<template>
  <div>
    <Toolbar title="Add Data to Resume"/>
    <template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Preview Resume</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="dialog = false">Save</v-btn>
            <v-btn dark flat @click="printPage">Print</v-btn>
          </v-toolbar-items>
        </v-toolbar>
         <Resume id="resume" v-bind:resumeData="resumeData"/>
      </v-card>
    </v-dialog>
  </v-layout>
  <div v-for="element in selectedData" :key="element.id"> 
      <RichTextEditor :fieldName="element.name" :fieldId="element.id" @contentChanged="doSomething" />
    </div>
</template>
   
  </div>
</template>

<script>
import RichTextEditor from '@/components/generation_one/RichTextEditor.vue'
import Resume from '@/components/Resume.vue'
import Toolbar from '@/components/generation_one/Toolbar'

var tempArr = new Map()
export default {
  name: 'userData',
  components: {
    RichTextEditor,
    Resume,
    Toolbar
  },
  data() {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        resumeData: []
      }
  },
  methods: {
    doSomething: function(fieldName, fieldId, html) {
      tempArr.set(fieldId, {fieldId: fieldId, fieldName: fieldName, content: html})
      console.log(JSON.parse(JSON.stringify([...tempArr])))
      this.resumeData = JSON.parse(JSON.stringify([...tempArr]))
    },
    printPage: function() {

    }
  },
  computed: {
    selectedData() {
      return this.$store.state.selectedData

    }
  }

 
}
</script>