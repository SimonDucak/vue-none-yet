<template>
  <div>
    <h1>Our Portfolio</h1>
    <create-project-form  @create-project="projects.push($event)"/>
    <h2>Projects</h2>
    <ul>
      <projects
        v-for="project in projects"
        :key="project._id"
        :name="project.name"
      />
    </ul>
  </div>
</template>

<script>
  import ProjectService from "../ProjectService";

  import Projects from "@/components/Projects.vue";
  import CreateProjectForm from "@/components/CreateProjectForm.vue";

  export default {
    components: {
      CreateProjectForm,
      Projects
    },
    data() {
      return {
        projects: []
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