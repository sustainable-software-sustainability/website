<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import timeGridPlugin from '@fullcalendar/timegrid'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data () {
    return {
      calendarOptions: {
        plugins: [timeGridPlugin],
        initialView: 'timeGrid',
        headerToolbar: {
          center: '',
          right: ''
        },
        visibleRange: {
          start: '2021-10-06',
          end: '2021-10-09'
        },
        allDaySlot: false,
        slotMinTime: '07:45',
        slotMaxTime: '18:10',
        slotDuration: '00:05:00',
        events: [
          // Session 1
          { title: 'Connect to Zoom & informal time', start: '2021-10-06 14:15', end: '2021-10-06 14:30' },
          { title: 'Opening WoSSS21 & Session 1', start: '2021-10-06 14:30', end: '2021-10-06 14:40' },
          { title: 'Icebreaker', start: '2021-10-06 14:40', end: '2021-10-06 14:50' },
          { title: 'Welcome to WoSSS21', start: '2021-10-06 14:50', end: '2021-10-06 14:55' },
          { title: 'Plenary session 1A', start: '2021-10-06 14:55', end: '2021-10-06 15:20' },
          { title: 'Break', start: '2021-10-06 15:20', end: '2021-10-06 15:25' },
          { title: 'Plenary session 1B', start: '2021-10-06 15:25', end: '2021-10-06 15:50' },
          { title: 'Break', start: '2021-10-06 15:50', end: '2021-10-06 15:55' },
          { title: 'Plenary session 1C', start: '2021-10-06 15:55', end: '2021-10-06 16:20' },
          { title: 'Break (5 mins) ', start: '2021-10-06 16:20', end: '2021-10-06 16:25' },
          { title: 'Introduction to breakout discussions', start: '2021-10-06 16:25', end: '2021-10-06 16:35' },
          { title: 'Break-out discussions & note taking', start: '2021-10-06 16:35', end: '2021-10-06 17:20' },
          { title: 'Networking', start: '2021-10-06 17:20', end: '2021-10-06 17:40' },
          { title: 'Brief report back from breakouts', start: '2021-10-06 17:40', end: '2021-10-06 17:55' },
          { title: 'Wrap up and close Session 1', start: '2021-10-06 17:55', end: '2021-10-06 18:00' },
          // Session 2
          { title: 'Connect to Zoom & informal time', start: '2021-10-07 07:45', end: '2021-10-07 08:00' },
          { title: 'Welcome to WoSSS Session 2', start: '2021-10-07 08:00', end: '2021-10-07 08:10' },
          { title: 'Icebreaker', start: '2021-10-07 08:10', end: '2021-10-07 08:20' },
          { title: 'Plenary session 2A', start: '2021-10-07 08:20', end: '2021-10-07 08:45' },
          { title: 'Break', start: '2021-10-07 08:45', end: '2021-10-07 08:50' },
          { title: 'Plenary session 2B', start: '2021-10-07 08:50', end: '2021-10-07 09:15' },
          { title: 'Break', start: '2021-10-07 09:15', end: '2021-10-07 09:20' },
          { title: 'Plenary session 2C', start: '2021-10-07 09:20', end: '2021-10-07 09:45' },
          { title: 'Break', start: '2021-10-07 09:45', end: '2021-10-07 09:50' },
          { title: 'Introduction to breakout discussions', start: '2021-10-07 09:50', end: '2021-10-07 10:00' },
          { title: 'Break-out discussions & note taking', start: '2021-10-07 10:00', end: '2021-10-07 10:45' },
          { title: 'Break', start: '2021-10-07 10:45', end: '2021-10-07 10:50' },
          { title: 'Brief report back from breakouts', start: '2021-10-07 10:50', end: '2021-10-07 11:05' },
          { title: 'Networking', start: '2021-10-07 11:05', end: '2021-10-07 11:25' },
          { title: 'Wrap up and close Session 2', start: '2021-10-07 11:25', end: '2021-10-07 11:35' },
          // Session 3
          { title: 'Connect to Zoom & informal time', start: '2021-10-07 14:15', end: '2021-10-07 14:30' },
          { title: 'Welcome to WoSSS21 Session 3', start: '2021-10-07 14:30', end: '2021-10-07 14:40' },
          { title: 'Icebreaker', start: '2021-10-07 14:40', end: '2021-10-07 14:50' },
          { title: 'Plenary session 3A', start: '2021-10-07 14:50', end: '2021-10-07 15:15' },
          { title: 'Break', start: '2021-10-07 15:15', end: '2021-10-07 15:20' },
          { title: 'Plenary session 3B', start: '2021-10-07 15:20', end: '2021-10-07 15:45' },
          { title: 'Break', start: '2021-10-07 15:45', end: '2021-10-07 15:50' },
          { title: 'Plenary session 3C', start: '2021-10-07 15:50', end: '2021-10-07 16:30' },
          { title: 'Break', start: '2021-10-07 16:30', end: '2021-10-07 16:35' },
          { title: 'Introduction to breakout discussions', start: '2021-10-07 16:35', end: '2021-10-07 16:45' },
          { title: 'Break-out discussions & note taking', start: '2021-10-07 16:45', end: '2021-10-07 17:30' },
          { title: 'Networking', start: '2021-10-07 17:30', end: '2021-10-07 17:40' },
          { title: 'Brief report back from breakouts', start: '2021-10-07 17:40', end: '2021-10-07 17:55' },
          { title: 'Wrap up and close Session 1', start: '2021-10-07 17:55', end: '2021-10-07 18:00' },
          // Session 4
          { title: 'Connect to Zoom & informal time', start: '2021-10-08 07:45', end: '2021-10-08 08:00' },
          { title: 'Welcome to WoSSS Session 4', start: '2021-10-08 08:00', end: '2021-10-08 08:05' },
          { title: 'Icebreaker', start: '2021-10-08 08:05', end: '2021-10-08 08:15' },
          { title: 'Plenary session 4A', start: '2021-10-08 08:15', end: '2021-10-08 08:40' },
          { title: 'Break', start: '2021-10-08 08:40', end: '2021-10-08 08:45' },
          { title: 'Plenary session 4B', start: '2021-10-08 08:45', end: '2021-10-08 09:25' },
          { title: 'Break', start: '2021-10-08 09:25', end: '2021-10-08 09:30' },
          { title: 'Panel Q & A', start: '2021-10-08 09:30', end: '2021-10-08 10:30' },
          { title: 'Break', start: '2021-10-08 10:30', end: '2021-10-08 10:35' },
          { title: 'Networking', start: '2021-10-08 10:35', end: '2021-10-08 11:05' },
          { title: 'Wrap up and close Session 4', start: '2021-10-08 11:05', end: '2021-10-08 11:15' },
          { title: 'Next steps and close of WoSSS21', start: '2021-10-08 11:15', end: '2021-10-08 11:30' }
        ]
      }
    }
  }
}
</script>
<style>
:global {
/*@import '~/node_modules/@fullcalendar/core/main.css';*/
/*@import '~/node_modules/@fullcalendar/daygrid/main.css';*/
@import '~/node_modules/@fullcalendar/common/main.css';
@import '~/node_modules/@fullcalendar/daygrid/main.css';

@import '~/node_modules/@fullcalendar/timegrid/main.css';
}

</style>
