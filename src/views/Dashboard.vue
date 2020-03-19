<template>
  <div class="container">
      <p>Hi {{username}}</p>
    <h2>Welcome to my Dashboard</h2>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
        username: 'Michael',

    };
  },
};
</script>

<style>
</style>