<template>
<div>
    
</div>
</template>

<script>
export default {
    ame:'ArticleView',
    computed:{
        getArticles(){
        return this.$store.getters.getArticles
        }
    },
    mounted() {
        console.log(this.getArticles);
        this.getArticles
    }

    }
</script>

<style>

</style>