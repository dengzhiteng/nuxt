<template>
  <div>
    id
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  }
};
</script>

<style scoped></style>
