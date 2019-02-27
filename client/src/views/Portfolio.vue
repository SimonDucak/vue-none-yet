<template>
  <div>
    <h1>Our Portfolio</h1>
    <button @click="showForm = true" v-if="!showForm">Create project</button>
    <button @click="showForm = false" v-if="showForm">Close form</button>
    <form v-if="showForm" class="flex f-column">
      <h2>Create project</h2>
      <p v-if="error">{{error}}</p>
      <input type="text" placeholder="name" v-model="newProject.name">
      <textarea placeholder="description" v-model="newProject.description"></textarea>
      <div>
        <input ref="tag-input" type="text" placeholder="tags">
        <button @click.prevent="addTag">Add tag</button>
        <button @click.prevent="newProject.tags = []">Remove all tags</button>
      </div>
      <ul>
        <li
          v-for="(tag,index) in newProject.tags"
          v-bind:key="index"
        >
          {{tag}}
        </li>
      </ul>
      <button @click.prevent="createProject">Create project</button>
    </form>
    <project-list />
  </div>
</template>

<script>
  import ProjectService from "../ProjectService";
  import ProjectList from "@/components/ProjectsList.vue";

  export default {
    components: {
      ProjectList
    },
    data() {
      return {
        showForm: false,
        error: "",
        newProject: {
          name: "",
          description: "",
          tags: []
        }
      }
    },
    methods: {
      addTag() {
        let tagInput = this.$refs["tag-input"];
        this.newProject.tags.push(tagInput.value);
        tagInput.value = "";
        tagInput.focus();
      },
      async createProject() {
        try {
          await ProjectService.createProject({name: "meno", description: "popis", tags: ["tag"]});
        } catch (err) {
          this.error = err;
        }
      }
    }
  };
</script>