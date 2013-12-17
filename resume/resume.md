---
layout:     default

data:
    title: "Resume"
    foos:
        - bar
        - herp
        - derp
        - boo
---

This is the HTML render of my resume.

Also available as [JSON]({{ site.url }}/resume/resume.json).

# {{ page.resume_data.title }}

{% for foo in page.resume_data.foos %}
- {{ foo }}
{% endfor %}

This page ID is: {{ page.path }}
