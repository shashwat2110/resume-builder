<template>
    <div>
        <div v-for="employment in employmentList" :key="employment[0]">
            <v-btn color="error" @click="removeEmployment(employment[0])"> Delete </v-btn>
        <Employment />
        </div>
         <v-text-field
            label="Company Name"
            hint="Facebook, Google, PizzaHut, etc."
            persistent-hint
            outline
            v-model="companyName"
          ></v-text-field>
        <v-btn color="primary" @click="addEmployment(companyName)">Add Employment</v-btn>
    </div>
</template>


<script>
import Employment from '@/components/generation_two/Employment.vue'

var employmentMap = new Map()
export default {
    name: 'Test',
    data: function() {
        return {
        companyName: '',
        employmentList: []
        }
    },
    components: {
        Employment
    },
    methods: {
        addEmployment: function(companyName) {
            var uid = Math.random()
            var employment = {company: companyName, uid: uid}
            employmentMap.set(uid, employment)
            console.log(JSON.parse(JSON.stringify([...employmentMap])))
            this.employmentList = JSON.parse(JSON.stringify([...employmentMap]))

            
        },
        removeEmployment: function(companyUID) {
            employmentMap.delete(companyUID)
            this.employmentList = JSON.parse(JSON.stringify([...employmentMap]))
        }
    }
    
}
</script>
