---
title: Configuration
sidebar_position: 20
---

To configure LibreTime, you need to edit the `/etc/airtime/airtime.conf` file. This page describe the available options to configure your installation.

## General

The `general` section configure anything related to the legacy and API services.

```ini
[general]
# The internal API authentication key, this field is required
api_key = some_random_generated_secret!

# The public url scheme
# Mutually exclusive with force_ssl
protocol =
# The public url hostname, default is localhost
base_url = localhost
# The public url port
base_port =
# The public url base path, default is /
base_dir = /
# Force https for generated urls, default is false
force_ssl = false

# How many hours ahead Playout should cache scheduled media files, default is 1
cache_ahead_hours = 1

# Authentication adaptor to use for the legacy service, default is local
# Specify a class like LibreTime_Auth_Adaptor_FreeIpa to replace the built-in adaptor
auth = local
```

In order to apply the changes made in this section, please restart the following services:

```
libretime-api
libretime-analyzer
libretime-celery
libretime-playout
```

## Database

The `database` section configure the PostgreSQL connection.

:::caution

<!-- TODO: Add link to a guide on how to edit such values -->

Before editing this section be sure to update the PostgreSQL server with the desired values.

:::

```ini
[database]
# The hostname of the PostgreSQL server, default is localhost
host = localhost
# The port of the PostgreSQL server, default is 5432
port = 5432
# The name of the PostgreSQL database, default is libretime
name = libretime
# The username of the PostgreSQL user, default is libretime
user = libretime
# The password of the PostgreSQL user, default is libretime
password = some_random_generated_secret!
```

In order to apply the changes made in this section, please restart the following services:

```
libretime-api
```

## RabbitMQ

The `rabbitmq` section configure the RabbitMQ connection.

:::caution

<!-- TODO: Add link to a guide on how to edit such values -->

Before editing this section be sure to update the RabbitMQ server with the desired values.

:::

```ini
[rabbitmq]
# The hostname of the RabbitMQ server, default is localhost
host = localhost
# The port of the RabbitMQ server, default is 5672
port = 5672
# The virtual host of RabbitMQ server, default is /libretime
vhost = /libretime
# The username of the RabbitMQ user, default is libretime
user = libretime
# The password of the RabbitMQ user, default is libretime
password = some_random_generated_secret!
```

In order to apply the changes made in this section, please restart the following services:

```
libretime-api
libretime-analyzer
libretime-celery
libretime-playout
```

## Playout

The `playout` section configure anything related to the playout service.

```ini
[playout]
# Liquidsoap connection host, default is localhost
liquidsoap_host = localhost
# Liquidsoap connection port, default is 1234
liquidsoap_port = 1234

# The format for recordings, allowed values are ogg|mp3, default is ogg
record_file_format = ogg
# The bitrate for recordings, default is 256
record_bitrate = 256
# The samplerate for recordings, default is 44100
record_samplerate = 44100
# The number of channels for recordings, default is 2
record_channels = 2
# The sample size for recordings, default is 16
record_sample_size = 16
```

In order to apply the changes made in this section, please restart the following services:

```
libretime-playout
```

## LDAP

The `ldap` section provide additional configuration for the authentication mechanism defined in `general.auth`, please see the [custom authentication documentation](../custom-authentication.md) for more details.

```ini
[ldap]
# Hostname of LDAP server
hostname = ldap.example.org
# Complete DN of user used to bind to LDAP
binddn = 'uid=libretime,cn=sysaccounts,cn=etc,dc=int,dc=example,dc=org'
# Password for binddn user
password = hackme
# Domain part of username
account_domain = INT.EXAMPLE.ORG
# Base search DN
basedn = 'cn=users,cn=accounts,dc=int,dc=example,dc=org'
# Name of the uid field for searching. Usually uid, may be cn
filter_field = uid

# Map user types to LDAP groups. Assign user types based on the group of a given user
# Key format is groupmap_*
groupmap_superadmin = 'cn=superadmin,cn=groups,cn=accounts,dc=int,dc=example,dc=org'
groupmap_admin = 'cn=admin,cn=groups,cn=accounts,dc=int,dc=example,dc=org'
groupmap_program_manager = 'cn=program_manager,cn=groups,cn=accounts,dc=int,dc=example,dc=org'
groupmap_host = 'cn=host,cn=groups,cn=accounts,dc=int,dc=example,dc=org'
groupmap_guest = 'cn=guest,cn=groups,cn=accounts,dc=int,dc=example,dc=org'
```
