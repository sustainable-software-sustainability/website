<script>
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue'
import timeGridPlugin from '@fullcalendar/timegrid'

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [timeGridPlugin],
        initialView: 'timeGrid',
        headerToolbar: {
          center: '',
          right: '',
        },
        visibleRange: {
          start: '2021-10-06',
          end: '2021-10-09',
        },
        allDaySlot: false,
        slotMinTime: '08:00',
        slotMaxTime: '18:10',
        slotDuration: '00:05:00',
        events: [
          // Session 1
          { title: 'Welcome to WoSSS21', start: '2021-10-06 14:30', end: '2021-10-06 14:35' },
          { title: 'Icebreaker', start: '2021-10-06 14:35', end: '2021-10-06 14:40' },
          { title: 'WoSSS initiative and aims for WoSSS21 ', start: '2021-10-06 14:40', end: '2021-10-06 14:45' },
          { title: 'Plenary session 1A', start: '2021-10-06 14:45', end: '2021-10-06 15:10' },
          { title: 'Break', start: '2021-10-06 15:10', end: '2021-10-06 15:20' },
          { title: 'Plenary session 1B', start: '2021-10-06 15:20', end: '2021-10-06 15:45' },
          { title: 'Break ', start: '2021-10-06 15:45', end: '2021-10-06 15:55' },
          { title: 'Plenary session 1C', start: '2021-10-06 15:55', end: '2021-10-06 16:20' },
          { title: 'Introduction to breakout sessions ', start: '2021-10-06 16:20', end: '2021-10-06 16:25' },
          { title: 'Break-out discussions & note taking', start: '2021-10-06 16:25', end: '2021-10-06 17:10' },
          { title: 'Networking', start: '2021-10-06 17:10', end: '2021-10-06 17:40' },
          { title: 'Brief report back from break-outs', start: '2021-10-06 17:40', end: '2021-10-06 17:55' },
          { title: 'Wrap up and close day 1', start: '2021-10-06 17:55', end: '2021-10-06 18:00' },
          // Session 2
          { title: 'Welcome to WoSSS21 day 2, part 1', start: '2021-10-07 08:00', end: '2021-10-07 08:05' },
          { title: 'Plenary session 2A', start: '2021-10-07 08:05', end: '2021-10-07 08:30' },
          { title: 'Break', start: '2021-10-07 08:30', end: '2021-10-07 08:40' },
          { title: 'Plenary session 2B', start: '2021-10-07 08:40', end: '2021-10-07 09:05' },
          { title: 'Break ', start: '2021-10-07 09:05', end: '2021-10-07 09:15' },
          { title: 'Plenary session 2C', start: '2021-10-07 09:15', end: '2021-10-07 09:40' },
          { title: 'Break-out discussions & note taking', start: '2021-10-07 09:40', end: '2021-10-07 10:25' },
          { title: 'Brief report back from break-outs', start: '2021-10-07 10:25', end: '2021-10-07 10:40' },
          { title: 'Wrap up and close day 2, part 1', start: '2021-10-07 10:40', end: '2021-10-07 10:45' },
          { title: 'Connecting and Social/Networking', start: '2021-10-07 10:45', end: '2021-10-07 11:30' },
          // Session 3
          { title: 'Welcome to WoSSS21 day 2, part 2', start: '2021-10-07 14:30', end: '2021-10-07 14:35' },
          { title: 'Plenary session 3A', start: '2021-10-07 14:35', end: '2021-10-07 15:00' },
          { title: 'Break', start: '2021-10-07 15:00', end: '2021-10-07 15:10' },
          { title: 'Plenary session 3B', start: '2021-10-07 15:10', end: '2021-10-07 15:35' },
          { title: 'Break ', start: '2021-10-07 15:35', end: '2021-10-07 15:45' },
          { title: 'Plenary session 3C', start: '2021-10-07 15:45', end: '2021-10-07 16:10' },
          { title: 'Break-out discussions & note taking', start: '2021-10-07 16:10', end: '2021-10-07 16:55' },
          { title: 'Brief report back from break-outs', start: '2021-10-07 16:55', end: '2021-10-07 17:10' },
          { title: 'Wrap up and close day 2, part 2', start: '2021-10-07 17:10', end: '2021-10-07 17:15' },
          { title: 'Connecting and Social/Networking', start: '2021-10-07 17:15', end: '2021-10-07 18:00' },
          // Session 4
          { title: 'Welcome to WoSSS21 day 3', start: '2021-10-08 08:00', end: '2021-10-08 08:05' },
          { title: 'Plenary session 4A', start: '2021-10-08 08:05', end: '2021-10-08 08:30' },
          { title: 'Break', start: '2021-10-08 08:30', end: '2021-10-08 08:40' },
          { title: 'Plenary session 4B', start: '2021-10-08 08:40', end: '2021-10-08 09:05' },
          { title: 'Break ', start: '2021-10-08 09:05', end: '2021-10-08 09:15' },
          { title: 'Plenary session 4C', start: '2021-10-08 09:15', end: '2021-10-08 09:40' },
          { title: 'Panel Q & A', start: '2021-10-08 09:40', end: '2021-10-08 10:25' },
          { title: 'Brief report back from break-outs', start: '2021-10-08 10:25', end: '2021-10-08 10:40' },
          { title: 'Workshop conclusions and next steps', start: '2021-10-08 10:40', end: '2021-10-08 10:45' },
          { title: 'Wrap up and close WoSSS21', start: '2021-10-08 10:45', end: '2021-10-08 11:30' },
        ],
      },
    }
  },
}
</script>
<template>
  <FullCalendar :options="calendarOptions" />
</template>
