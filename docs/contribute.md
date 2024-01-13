# Contributing to LibreTime

First and foremost, thank you! We appreciate that you want to contribute to
LibreTime, your time is valuable, and your contributions mean a lot to us.

Before any contribution, read and be prepared to adhere to our
[code of conduct](https://github.com/libretime/organization/blob/main/CODE_OF_CONDUCT.md).

LibreTime development workflows follow the standardized [C4 development process](https://rfc.zeromq.org/spec:42/c4/), with some LibreTime specific changes:

- [2.3. Patch Requirements](https://rfc.zeromq.org/spec/42/#23-patch-requirements)
  - `7.` A patch commit message MUST follow the [conventional commits specification](https://www.conventionalcommits.org/en/v1.0.0/).
- [2.4. Development Process](https://rfc.zeromq.org/spec/42/#24-development-process)
  - `16.` Maintainers MAY NOT merge incorrect patches.
- [2.5. Branches and Releases](https://rfc.zeromq.org/spec/42/#25-branches-and-releases)
  - `1.` The project SHALL have a development branch (`main`) that always holds the latest in-progress version and SHOULD always build. The project MAY have a bug fixes only branch (`stable-*`) that always holds the current stable version and SHOULD always build.
  - `3.` To make a stable release a Maintainer shall tag the repository. Stable releases SHALL always be released from the repository `main` or `stable-*` branches.

## Contribute financially

LibreTime is run by volunteers who manage the project in their spare time. Financial contributions help us pay for our domain and infrastructure. It can also be used to cover the costs of development for important features and conference attendance. If you wish to contribute financially, you can do so through our [OpenCollective](https://opencollective.com/libretime).

## Write documentation

One of the simplest ways to get started contributing to a project is through improving documentation. LibreTime is constantly evolving, this means that sometimes our documentation has gaps. You can help by adding missing sections, editing the existing content so it is more accessible or creating new content (tutorials, FAQs, etc).

Issues pertaining to the documentation are usually marked with the [documentation](https://github.com/libretime/libretime/issues?q=is%3Aopen+is%3Aissue+label%3A%22is%3A+documentation%22) label.

## Translate LibreTime

LibreTime can run in over 15 different languages due to the gracious help of our volunteers.

LibreTime is localized using [Weblate](https://weblate.org/). If you would like to contribute a language translation, create an account and start working on [our Weblate page](https://hosted.weblate.org/projects/libretime/).

## Report bugs or request features

Help us improve LibreTime by [submitting a bug report or suggesting new features](https://github.com/libretime/libretime/issues). When you are creating a report, please include as many details as possible.

You will find more details on how to submit a report on the [issue creation page](https://github.com/libretime/libretime/issues/new/choose).

The [official issue tracker](https://github.com/libretime/libretime/issues) is hosted on Github.

## Contribute with code

Are you familiar with coding in PHP or Python? Have you made projects in [Liquidsoap](https://www.liquidsoap.info/) and some of the other services we use? Help us improve LibreTime by picking an issue in the [list of bugs and feature requests](https://github.com/libretime/libretime/issues).

Then [fork our repo](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) and [setup a development environment](https://libretime.org/docs/contributor-manual/development-environment/) to get you started! Make sure to setup [pre-commit](https://libretime.org/docs/contributor-manual/development-workflows/#pre-commit) to enforce the project best practices before committing new code.

Knowledge on how to use [Github](https://guides.github.com/activities/hello-world/)
and [Git](https://git-scm.com/docs/gittutorial) will suit you well, use the
links for a quick 101.
