<template>
  <div class="home">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At est fugit impedit magni modi nostrum praesentium soluta ut veritatis voluptatem! Alias eius ipsum maxime molestias nemo possimus recusandae, repellat suscipit!</p>
    <BlockText>
      <template v-slot:title>Texte dans le Slot Label</template>
      <template v-slot:content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, distinctio fuga illum itaque nostrum perferendis quas quidem rerum vero voluptatibus! Aperiam, commodi culpa cum delectus deserunt doloribus enim incidunt inventore magni nesciunt nulla, optio, tempore veritatis! Animi blanditiis consequuntur hic illum odio sequi tempore ullam. A amet aut autem cum deserunt dicta distinctio dolores eveniet exercitationem expedita harum inventore labore laborum maiores minima minus molestiae nemo nihil nisi non optio porro praesentium quod quos recusandae repellat rerum sapiente sequi similique, sit soluta sunt tempora temporibus. Delectus dolorem eius eveniet ipsa ipsam non quasi, quod saepe vitae! Autem beatae nulla sapiente.</template>
    </BlockText>
  </div>
</template>

<script>
import BlockText from '@/components/BlockText.vue';

export default {
  name: 'Home',
  components: {
    BlockText
  }
}
</script>

<style lang="scss">
  .home {
    color: $main-color;
  }
</style>
