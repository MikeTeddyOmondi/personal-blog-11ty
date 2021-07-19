---
title: "Services"
layout: "layouts/base.ejs"
services:
  - title: "Design"
    description: "This involves planning out the system architecture and technologies to be use."
    imageUrl: https://github.com/MikeTeddyOmondi/oboge-guest-house-app
  - title: "Development"
    description: "This invloves converting the design implementation and user requirements to refactored code."
    imageUrl: https://github.com/MikeTeddyOmondi/mwAfrikaa
  - title: "SEO"
    description: "This involves optimising of the website to appear first in search results when searched in different search engines"
    imageUrl: https://github.com/MikeTeddyOmondi/royal-rock
---

# <%- title %>

---

<% services.forEach(function(service){ %>

### <%- service.title %>

**Description:** <%- service.description %>

---

<% }) %>
