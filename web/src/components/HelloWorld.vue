<template>
  <div>
    <h1>Lunch Together!</h1>
    <input
      v-model="person"
      placeholder="Name">
    <button @click="add">Add me</button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      person: ''
    }
  },
  methods: {
    add: function(event) {
      const person = this.person

      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open(
        'POST',
        'https://us-central1-heneise-dev.cloudfunctions.net/addPerson',
        true
      )
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.onreadystatechange = function() {}
      xhr.send(JSON.stringify({ participant: person }))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
