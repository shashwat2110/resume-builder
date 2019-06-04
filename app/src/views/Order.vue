<template>
  <div class="order">
    <Toolbar title="Select Fields"/>
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs4>
        <v-card>
          <Draggable @listModified="doSomething" :uid="mailList" listName = "Available Featrues" group="test" v-bind:list="list1" />
        </v-card>
      </v-flex>

      <v-flex xs4>
      </v-flex>

       <v-flex xs4>
        <v-card>
          <Draggable @listModified="doSomething" :uid="selectedList" listName = "Selected Features" group ="test" v-bind:list="list2" />
        </v-card>
      </v-flex>
    </v-layout>
    <v-btn round color="primary" dark v-on:click="renderDataPage">Submit</v-btn>
    </v-container>
    
  </div>
</template>

<script>
import Draggable from '@/components/generation_one/Draggable.vue'
import Toolbar from '@/components/generation_one/Toolbar.vue'

export default {
  name: 'order',
  components: {
    Draggable,
    Toolbar
  },
  data: function() {
    return {
      currentSelectedData: [],
      mailList: "all",
      selectedList: "sel",
      list1: [
        {name: "Research Experience", info: "Information!!", id: "10", icon: ""},
        {name: "Work Experience", info: "Information!!", id: "2", icon: ""},
        {name: "Industry Experience", info: "Information!!", id: "3", icon: ""},
        {name: "Projects", info: "Information!!", id: "4", icon: ""},
        {name: "Publications", info: "Information!!", id: "5", icon: ""},
        {name: "Skills", info: "Information!!", id: "6", icon: ""},
        {name: "Position of Responsibility", info: "Information!!", id: "7", icon: ""},
        {name: "Achivements", info: "Information!!", id: "8", icon: ""},
        {name: "Courses", info: "Information!!", id: "9", icon: ""},
      ],
      list2: [
        {name: "Basic Information", info: "Information!!", id: "1", icon: ""},
      ]
    }
  },
  methods: {
    doSomething: function(data, uid) {
      if (uid == "sel")
        this.currentSelectedData = data
    },
    renderDataPage: function() {
      var selectedArray = JSON.parse(JSON.stringify(this.currentSelectedData))
      if (selectedArray.length == 0)
        selectedArray = this.list2
      this.$store.commit('listFinalised', selectedArray)
      // this.$emit('listFinalised', this.currentSelectedData)
      this.$router.replace('fillData')
    }
  }
}
</script>