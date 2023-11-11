// app.js

const { createApp, provide } = Vue;
const { EjsSchedule, EViews, EView, EResources, EResource, Day, Week, WorkWeek, Month, Agenda } = window.syncfusion;

const app = createApp({
  setup() {
    provide('schedule', [Day, Week, WorkWeek, Month, Agenda]);

    const selectedDate = new Date(2023, 7, 8);
    const eventSettings = {
      dataSource: [
        // ... your event data
      ],
    };
    const ownerDataSource = [
      // ... your owner data
    ];

    return {
      selectedDate,
      eventSettings,
      ownerDataSource,
    };
  },
});

app.component('ejs-schedule', EjsSchedule);
app.component('e-views', EViews);
app.component('e-view', EView);
app.component('e-resources', EResources);
app.component('e-resource', EResource);

app.mount('#app');
