<template>
    <div>
        <div v-for="education in educationList" :key="education[0]">
            <v-btn color="error" @click="removeEducation(education[0])"> Delete </v-btn>
        <Education />
        </div>
         <v-text-field
            label="College Name"
            hint="IIT Kanpur, DU, Miranda House, Lund University"
            persistent-hint
            outline
            v-model="collegeName"
          ></v-text-field>
        <v-btn color="primary" @click="addEducation(collegeName)">Add Education</v-btn>
    </div>
</template>


<script>
import Education from '@/components/generation_two/Education.vue'

var educationMap = new Map()
export default {
    name: 'Test',
    data: function() {
        return {
        collegeName: '',
        educationList: []
        }
    },
    components: {
        Education
    },
    methods: {
        addEducation: function(collegeName) {
            var uid = Math.random()
            var education = {college: collegeName, uid: uid}
            educationMap.set(uid, education)
            console.log(JSON.parse(JSON.stringify([...educationMap])))
            this.educationList = JSON.parse(JSON.stringify([...educationMap]))
        },
        removeEducation: function(collegeUID) {
            educationMap.delete(collegeUID)
            this.educationList = JSON.parse(JSON.stringify([...educationMap]))
        }
    }
    
}
</script>
