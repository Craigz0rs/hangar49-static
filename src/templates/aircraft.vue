<template>
  <layout>
      <div>
        <h1>{{$page.aircraft.post_name}}</h1>
      </div>
  </layout>
</template>

<page-query>
query ($path: String!) {
  aircraft (path: $path) {
      post_name
  }
}
</page-query>