<template>
  <div class="home">
    <Bar />
    <Pie />
  </div>
</template>

<script>
import Bar from "@/components/analysis/Bar";
import Pie from "@/components/analysis/Pie";

export default {
  name: "Home",
  components: {
    Bar,
    Pie,
  },
};
</script>
