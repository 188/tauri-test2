# Security Policy

This document outlines security procedures and general policies for the Postdata project.

- [Security Policy](#security-policy)
  - [Reporting a security vulnerability](#reporting-a-security-vulnerability)
  - [What is not a valid vulnerability](#what-is-not-a-valid-vulnerability)
  - [Incident response process](#incident-response-process)

## Reporting a security vulnerability

We use [Github Security Advisories](https://github.com/mamahuhu-io/postdata/security/advisories) to manage vulnerability reports and collaboration.
Someone from the Postdata team shall report to you within 48 hours of the disclosure of the vulnerability in GHSA. If no response was received, please reach out to
Postdata Support at support@mamahuhu.io along with the GHSA advisory link.

> NOTE: Since we have multiple open source components, Advisories may move into the relevant repo (for example, an XSS in a UI component might be part of [`@Postdata/ui`](https://github.com/mamahuhu-io/ui)).
> If in doubt, open your report in `mamahuhu-io/postdata` GHSA.

**Do not create a GitHub issue ticket to report a security vulnerability!**

The Postdata team takes all security vulnerability reports in Postdata seriously. We appreciate your efforts and responsible disclosure and will make every effort to acknowledge your contributions.

## What is not a valid vulnerability
We receive many reports about different sections of the Postdata platform. Hence, we have a fine line we have drawn defining what is considered valid vulnerability.
Please refrain from opening an advisory if it describes the following:

- A vulnerability in a dependency of Postdata (unless you have practical attack with it on the Postdata codebase)
- Reports of vulnerabilities related to old runtimes (like NodeJS) or container images used by the codebase
- Vulnerabilities present when using Postdata in anything other than the defined minimum requirements that Postdata supports.

Postdata Team ensures security support for:
- Windows versions on or above Windows 10 on Intel and ARM.
- macOS versions dating back up to 2 years on Intel and Apple Silicon.
- Popular Linux distributions with up-to-date packages with preference to x86/64 CPUs.

## Incident response process

In case an incident is discovered or reported, we will follow the following  process to contain, respond, and remediate:

1. Confirm the problem and determine the affected versions.
2. Audit code to find any potential similar problems.
3. Prepare fixes for all releases still under maintenance. These fixes will be deployed as fast as possible to production.
