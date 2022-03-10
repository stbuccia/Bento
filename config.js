// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘
console.log(personal_data);
const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Stefano",
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Buongiorno,",
  greetingAfternoon: "Ciao,",
  greetingEvening: "Buonasera,",
  greetingNight: "Vai a dormire,",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: personal_data.weather.key, // Write here your API Key
  weatherIcons: "Nord", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "it", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: personal_data.weather.latitude,
  defaultLongitude: personal_data.weather.longitude,

  // Autochange
  autoChangeTheme: true,

  // Autochabge by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "2",
      name: "Mail",
      icon: "mail",
      link: "https://mail.protonmail.com/",
    },
    {
      id: "3",
      name: "Google Maps",
      icon: "map-pin",
      link: "https://www.google.it/maps",
    },
    {
      id: "4",
      name: "Pocket",
      icon: "pocket",
      link: "https://www.pocket.com",
    },
    {
      id: "5",
      name: "Unsplash",
      icon: "image",
      link: "https://unsplash.com",
    },
    {
      id: "6",
      name: "Youtube",
      icon: "youtube",
      link: "https://youtube.com/",
    },
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Music",
      icon: "headphones",
      link: "https://open.spotify.com",
    },
    {
      id: "2",
      name: "twitter",
      icon: "twitter",
      link: "https://twitter.com/",
    },
    {
      id: "3",
      name: "bot",
      icon: "bot",
      link: "https://discord.com/app",
    },
    {
      id: "4",
      name: "Amazon",
      icon: "shopping-bag",
      link: "https://amazon.com/",
    },
    {
      id: "5",
      name: "Hashnode",
      icon: "pen-tool",
      link: "https://hashnode.com/",
    },
    {
      id: "6",
      name: "Figma",
      icon: "figma",
      link: "https://figma.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "music",
      id: "1",
      links: [
        {
          name: "Alternative",
          link:
            personal_data.jellyfin.url +
            "#!/list.html?musicGenreId=" +
            personal_data.jellyfin.genres.alternative,
        },
        {
          name: "Folk",
          link:
            personal_data.jellyfin.url +
            "#!/list.html?musicGenreId=" +
            personal_data.jellyfin.genres.folk,
        },
        {
          name: "Pop",
          link:
            personal_data.jellyfin.url +
            "#!/list.html?musicGenreId=" +
            personal_data.jellyfin.genres.pop,
        },
        {
          name: "Rock",
          link:
            personal_data.jellyfin.url +
            "#!/list.html?musicGenreId=" +
            personal_data.jellyfin.genres.rock,
        },
      ],
    },
    {
      icon: "cloud",
      id: "2",
      links: [
        {
          name: "Attività",
          link: personal_data.nextcloud.url + "/index.php/apps/tasks",
        },
        {
          name: "Calendario",
          link: personal_data.nextcloud.url + "/index.php/apps/calendar/dayGridMonth/now",
        },
        {
          name: "Contatti",
          link: personal_data.nextcloud.url + "/index.php/apps/contacts",
        },
        {
          name: "Note",
          link: personal_data.nextcloud.url + "/index.php/apps/notes",
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "binary",
      id: "1",
      links: [
        {
          name: "Spotify",
          link: "https://www.spotify.com",
        },
        {
          name: "Reddit",
          link: "https://www.reddit.com",
        },
        {
          name: "Hashnode",
          link: "https://www.hashnode.com",
        },
        {
          name: "Pocket",
          link: "https://www.pocket.com",
        },
      ],
    },
    {
      icon: "github",
      id: "2",
      links: [
        {
          name: "Front",
          link: "https://www.reddit.com/r/Frontend/",
        },
        {
          name: "Rust",
          link: "https://www.reddit.com/r/rust/",
        },
        {
          name: "Go",
          link: "https://www.reddit.com/r/golang/",
        },
        {
          name: "Repos",
          link: "https://github.com/migueravila",
        },
      ],
    },
  ],
};
