document.addEventListener('DOMContentLoaded', () => {
  const liveEventsList = document.getElementById('liveEventsList');
  const upcomingEventsList = document.getElementById('upcomingEventsList');
  // Datos simulados de eventos en vivo
  const liveEvents = [
    {
      id: 1,
      name: "Partido A vs Partido B",
      time: "En curso",
      odds: {
        home: 1.85,
        draw: 3.25,
        away: 4.10
      }
    },
    {
      id: 2,
      name: "Partido C vs Partido D",
      time: "Min 45",
      odds: {
        home: 2.10,
        draw: 3.00,
        away: 3.50
      }
    }
  ];
