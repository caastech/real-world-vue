<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from "@/services/EventServices.js";

export default {
  name: "EventDetails",
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },

  created() {
    // fetch event data by id
    EventService.getEvent(this.id)
      .then((response) => {
        // console.log(response);
        this.event = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>
