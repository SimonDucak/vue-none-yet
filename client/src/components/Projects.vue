<template>
  <li>
    {{name}}
    <ul>
      <router-link tag="li" :to="{path: '/project/' + urlPath}"><a>Show project</a></router-link>
      <li><a href="#">Edit project</a></li>
      <li><a href="#">Remove project</a></li>
      <li><a href="#">Add template</a></li>
    </ul>
  </li>
</template>

<script>
  export default {
    name: "ProjectList",
    props : [
      "name",
      "urlPath"
    ]
  };
</script>

<style scoped>

</style>