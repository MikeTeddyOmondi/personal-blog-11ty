---
title: "Projects"
layout: "layouts/base.ejs"
projects:
  - heading: "Hotel App"
    technologies: "HTML/CSS/JS/NodeJS/MongoDB/APIs"
    description: "This is a hotel management system for managing CMS and ERP"
    url: https://github.com/MikeTeddyOmondi/oboge-guest-house-app
  - heading: "Blog S-a-a-s App"
    technologies: "HTML/CSS/JS/NodeJS/MongoDB/APIs"
    description: "This is a web app for writing blogs easily and quickly"
    url: https://github.com/MikeTeddyOmondi/mwAfrikaa
  - heading: "Royal Rock | Website"
    technologies: "HTML/CSS/JS/NodeJS/MongoDB/APIs"
    description: "This is a website for selling clothes online"
    url: https://github.com/MikeTeddyOmondi/royal-rock
---

# <%- title %>

---

<% projects.forEach(function(project){ %>

#### <a class="nav-link p-0" href="<%- project.url %>"><%- project.heading %> </a>

Technologies used: _**<%- project.technologies %>**_

Project description: <%- project.description %>

---

<% }) %>
