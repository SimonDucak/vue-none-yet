<template>
  <div>
    <h2>Projects</h2>
    <p v-if="error">{{ error }}</p>
    <ul>
      <li
        v-for="(project) in projects"
        v-bind:key="project._id"
      >
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  import ProjectService from "../ProjectService";

  export default {
    name: "ProjectList",
    data() {
      return {
        projects: [],
        error: ""
      }
    },
    async mounted() {
      try {
        this.projects = await ProjectService.getProjects();
      } catch (err) {
        this.error = err;
      }
    }
  };
</script>

<style scoped>

</style>