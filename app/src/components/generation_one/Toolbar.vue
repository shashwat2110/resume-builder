<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title> {{ title }} </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
    
    name: 'Toolbar',
    props: {
        title: String,
        links: Array
    }
}
</script>
