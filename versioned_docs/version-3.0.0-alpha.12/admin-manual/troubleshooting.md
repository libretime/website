---
title: Troubleshooting
sidebar_position: 90
---

This guide walk you though the steps required to troubleshoot LibreTime.

## Services status

When facing a problem with LibreTime the first reflex is to verify whether the services are running.

In the web interface, go to **Settings** > **Status** to see the state of the services.

![](./troubleshooting-status-page.png)

If a service isn't running, you should search for details using the tool running those services.
On a common setup, you should use the systemd service status:

```bash
sudo systemctl status libretime-celery
```

:::note

Be sure to replace the service name with the problematic one.

:::

## Logs

The next place to search for details on potential errors are the log files.
On a common setup, you should search for the following files:

- `/var/log/libretime/analyzer.log` contains logs from the analyzer,
- `/var/log/libretime/api.log` contains logs from the api,
- `/var/log/libretime/legacy.log` contains logs from the legacy app,
- `/var/log/libretime/liquidsoap.log` contains logs from liquidsoap,
- `/var/log/libretime/playout.log` contains logs from playout.

For some LibreTime services, you can set a higher log level using the `LIBRETIME_LOG_LEVEL` environment variable, or by running the service by hand and using a command line flag:

```bash
sudo -u www-data libretime-analyzer --config /etc/airtime/airtime.conf --log-level debug
```

- `/var/log/syslog` contains most of the system logs combined. This log file may contain information that the application logger wasn't able to log, such as early startup errors. You can get the LibreTime logs using:

```bash
sudo tail -f "/var/log/syslog" | grep "libretime-"
```

- `/var/log/apache2/error.log` contains logs from the web server.
