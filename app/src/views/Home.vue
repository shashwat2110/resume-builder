<template>
  <div class="home">
    <HelloWorld msg="Frontend for getPlaced!"/>
    <button @click="logout">Logout</button><br>
    <input type="file" id="testFile" />
    <button @click="uploadResume">Upload your resume</button>
    <select id = "resumeType">
      <option value="type1">TYPE 1</option>
      <option value="type2">TYPE 2</option>
      <option value="type3">TYPE 3</option>
    </select>
  </div>
</template>

<script>
import firebase from 'firebase';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },

    uploadResume: function() {
      // Create a root reference
      var storageRef = firebase.storage().ref();

      var file = document.getElementById("testFile").files[0]; // use the Blob or File API



      // Create file metadata including the content type
      var metadata = {
        contentType: 'image/jpeg',
      };

      // Upload the file and metadata
      var uploadTask = storageRef.child('folder uid - ' + firebase.auth().currentUser.uid + '/resume-' + document.getElementById("resumeType").value).put(file, metadata);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function(snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        }, function(error) {

        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;

          case 'storage/canceled':
            // User canceled the upload
            break;


          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      }, function() {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL);
        });
      });
    }

  }
}
</script>
