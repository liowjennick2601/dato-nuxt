<template>
  <div>
    <h1>Dashboard Page</h1>
    <p>Some text goes here</p>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  middleware: ["auth"]
}
</script>