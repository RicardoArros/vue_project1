<template>
  <div class="container">
    <!-- FILTERS -->
    <div class="row mx-0">
      <div class="col-md-6 col-lg-4 mx-auto mt-3">
        <input
          type="text"
          class="form-control"
          placeholder="Buscar por nombre"
          v-model="filters.searchQuery"
        />
      </div>
    </div>

    <!-- USERS CARDS -->
    <div class="row mx-0">
      <div
        v-for="user in filteredUsers"
        :key="user.id.value"
        class="col-12 col-md-6 col-lg-4 p-3"
      >
        <div class="border rounded py-2">
          <img :src="user.picture.large" alt="" class="mb-3" />
          <h3>{{ `${user.name.first} ${user.name.last}` }}</h3>
          <h6>{{ `${user.dob.age} años` }}</h6>
          <h6>{{ `${user.location.state}` }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "UserList",
  computed: {
    ...mapState(["randomUsers", "filters"]),
    ...mapGetters(["filteredUsers"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
