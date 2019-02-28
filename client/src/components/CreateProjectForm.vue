<template>
    <div>
        <button @click="showForm = true" v-if="!showForm">Create project</button>
        <button @click="showForm = false" v-if="showForm">Close form</button>

        <form @submit.prevent="createProject" v-if="showForm" class="flex f-column">
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
                        v-for="(tag ,index) in newProject.tags"
                        v-bind:key="index"
                >
                    {{tag}}
                </li>
            </ul>

            <button>Create project</button>
        </form>
    </div>
</template>

<script>
    import ProjectService from "../ProjectService";

    export default {
        name: "CreateProjectForm",
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
            resetForm() {
                let reqData = this.newProject;
                reqData.name = "";
                reqData.description = "";
                reqData.tags = [];
            },
            async createProject() {
                try {
                    let data = await ProjectService.createProject(this.newProject);
                    this.resetForm();
                    this.$emit("create-project", data);
                } catch (err) {
                    this.error = err;
                }
            }
        }
    }
</script>

<style scoped>

</style>