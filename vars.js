const latestVersion = "4.2.0";

module.exports = {
  title: "LibreTime",
  description: "Radio Broadcast & Automation Platform",
  version: latestVersion,
  website: "https://libretime.org",

  repository: {
    href: "https://github.com/libretime/libretime",
    label: "Github",
  },

  forum: {
    href: "https://discourse.libretime.org",
    label: "Forum",
  },

  channel: {
    href: "https://matrix.to/#/#libretime:matrix.org",
    label: "Chat",
  },

  home: {
    links: [
      { label: "Get started 🚀", to: "/docs/admin-manual" },
      { label: "Release note", to: `/docs/releases/${latestVersion}` },
    ],
  },

  doc: {
    sections: [
      { label: "Admin manual", to: "/docs/admin-manual" },
      { label: "User manual", to: "/docs/user-manual" },
      { label: "Developer manual", to: "/docs/developer-manual" },
      { label: "Contributor manual", to: "/docs/contributor-manual" },
    ],
  },
};
