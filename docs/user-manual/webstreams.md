---
title: Webstreams
---

<iframe
    width="560"
    height="315"
    src="https://www.youtube-nocookie.com/embed/Ha3X6aYdY04"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>

## Adding a webstream

A web stream URL and metadata can be added to the LibreTime library, so that a remote stream can be searched for and scheduled to be _pulled_ into a show. For example, at the top of the hour your station may pull a news report from journalists working in another studio. This is a different concept from **Master Source** and **Show Source** remote streams which are _pushed_ into the LibreTime playout schedule.

To add a web stream, click the **+ New** button on the left side of the Webstreams page. Like a playlist, web streams in the Library can have a title and **Description**, which may help you find them in searches later.

![](./webstreams-webstream.jpg)

The **Stream URL** setting must include the _port number_ (such as 8000) and _mount point_ (such as remote_stream) of the remote stream, in addition to the streaming server name. A **Default Length** for the remote stream can also be set. If the stream is added at the end of a show which becomes overbooked as a result, it will be faded out when the show ends.

:::note

LibreTime checks the remote webstream's status upon editing stream settings, so an offline stream will result in an error. There are many tools such as [BUTT](https://danielnoethen.de/butt/) and [MIXXX](https://www.mixxx.org) that can be used to send a test stream to LibreTime can save it; read more [here](./live-broadcast.md).

:::
