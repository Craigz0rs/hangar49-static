<template>
  <div>
  	<h1 v-html="$page.wordPressPost.title" />
  </div>
</template>

<page-query>
query ($id: ID!) {
  wordPressPost (id: $id) {
    title
    content
  }
}
</page-query>