module.exports = [
  {
    to: "/docs",
    from: ["/documentation/", "/manual/", "/manual/about-this-manual/"],
  },
  {
    to: "/docs/admin-manual/backup",
    from: ["/manual/backing-up-the-server/", "/docs/backing-up-the-server"],
  },
  {
    to: "/docs/admin-manual/install",
    from: [
      "/install",
      "/docs/admin-manual/setup",
      "/docs/admin-manual/setup/install",
    ],
  },
  {
    to: "/docs/admin-manual/install/upgrade",
    from: [
      "/manual/upgrading/",
      "/docs/upgrading",
      "/docs/admin-manual/setup/upgrade",
    ],
  },
  {
    to: "/docs/admin-manual/troubleshooting",
    from: ["/manual/troubleshooting/", "/docs/troubleshooting"],
  },
];
