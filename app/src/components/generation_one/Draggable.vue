
<template>
  <div>  
    <v-list two-line>
      <v-toolbar color="light-blue" dark>

        <v-toolbar-title> {{ listName }} </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>view_module</v-icon>
        </v-btn>
      </v-toolbar>
       <v-container
      id="scroll-target"
      style="max-height: 400px"
      class="scroll-y"
    >
      <v-layout
        v-scroll:#scroll-target="onScroll"
        column
        align-center
        justify-center
      >
      </v-layout>
      <draggable v-model="dataList" :group="group" style="min-height: 10px" @change="modifyList">
        <template v-for="item in dataList">
          <v-list-tile :key="item.id">
            <v-list-tile-avatar>
              <img :src="item.icon">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.name"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.info"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </draggable>
       </v-container>
    </v-list>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'Draggable',
  components: {
    draggable,
  },
  props: {
    uid: String,
    listName: String,
    list: Array,
    group: String
  },
  data: function () {
    return {
      dataList: this.list
    }
  },
  methods: {
    modifyList: function() {
      this.$emit('listModified', this.dataList, this.uid)
    }
  }
}
</script>