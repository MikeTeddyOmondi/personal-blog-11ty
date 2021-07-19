---
title: "Posts"
layout: "layouts/base.ejs"
---

# <%- title %>

---

<% blogPosts.posts.forEach(function(post){ %>

#### <a class="nav-link p-0" href="#"><%- post.title %> </a>

**Description:** <%- post.description %>

---

<% }) %>
