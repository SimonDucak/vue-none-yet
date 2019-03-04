<template>
  <div>
    <h1>Project page</h1>
    <div v-if="isLoaded">
      <h2>{{name}}</h2>
      <h3>Templates</h3>
      <ul>
        <li v-for="template in templates" v-bind:key="template._id">{{template.type}}</li>
      </ul>
      <h3>Tags</h3>
      <ul>
        <li v-for="(tag,index) in tags" v-bind:key="index + 1">{{tag}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import ProjectService from "../ProjectService";

  export default {
    props: [
      "urlPath"
    ],
    data() {
      return {
        name: "",
        templates: [],
        tags: [],
        isLoaded: false
      }
    },
    async mounted() {
      try {
        let project = await ProjectService.getProject(this.$props.urlPath);
        this.name = project.name;
        this.templates = project.templates;
        this.tags = project.tags;

        this.isLoaded = true;
      } catch (err) {
        console.log(err);
      }
    }
  }
</script>

<style scoped>

</style>