<template>
  <div class="row">
    <div class="col-sm-4">
    </div>
    <div class="col-sm-4">
      <div class="list-group">
        <a
          href="#"
          class="list-group-item list-group-item-action flex-column align-items-start"
          v-for="todo of todos" :key="todo.id"
        >
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{todo.title}}</h5>
            <small class="text-muted">{{new Date(todo.dateTime).toLocaleString()}}</small>
          </div>
          <p class="mb-1">
          {{todo.place}}
          </p>
          <small class="text-muted">{{todo.id}}</small>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
    todos:Array
  },
};
</script>
