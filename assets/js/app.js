/* =========================================================================
   Portfolio renderer — reads window.PORTFOLIO (assets/js/data.js) and builds
   the page. You should never need to edit this file.
   ========================================================================= */
(function () {
  "use strict";

  var D = window.PORTFOLIO || {};
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------- helpers */
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function icon(name, extraClass) {
    return (
      '<svg class="ico' +
      (extraClass ? " " + extraClass : "") +
      '" aria-hidden="true" focusable="false"><use href="#i-' +
      name +
      '"></use></svg>'
    );
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function externalAttrs(url) {
    return /^https?:/i.test(url) ? ' target="_blank" rel="noopener noreferrer"' : "";
  }

  /* social icon: text badge for LinkedIn, real logo image for GitHub */
  function socialIcon(type) {
    if (type === "linkedin") {
      return '<span class="social-btn__icon" aria-hidden="true">in</span>';
    }
    if (type === "github") {
      return '<span class="social-btn__icon" aria-hidden="true">' +
        '<img src="assets/img/github.png" alt="" /></span>';
    }
    return '<span class="social-btn__icon" aria-hidden="true">' + icon(type) + "</span>";
  }

  function socials() {
    /* entries without a url (e.g. Instagram/Facebook until you paste them)
       are skipped so nothing broken or clickable-less is rendered */
    return (D.socials || []).filter(function (s) {
      return s.url;
    });
  }

  /* --------------------------------------------------------- deployed sites */
  function renderSites() {
    var host = byId("heroSites");
    var sites = (D.hero && D.hero.sites) || [];
    if (!host || !sites.length) return;

    host.querySelector("ul").innerHTML = sites
      .map(function (site) {
        return (
          '<li><a href="' +
          esc(site.url) +
          '" target="_blank" rel="noopener noreferrer">' +
          icon("arrow") +
          "<span>" +
          esc(site.label) +
          "</span></a></li>"
        );
      })
      .join("");

    host.hidden = false;
  }

  /* ---------------------------------------------------------- certifications */
  function renderCertifications() {
    var host = byId("certGrid");
    if (!host || !D.certifications) return;

    host.innerHTML = D.certifications
      .map(function (cert) {
        return (
          '<article class="cert-card reveal">' +
          '<span class="cert-card__icon" aria-hidden="true">' +
          icon(cert.icon || "check") +
          "</span>" +
          "<div>" +
          '<h4 class="cert-card__title">' +
          esc(cert.title) +
          "</h4>" +
          '<p class="cert-card__org">' +
          esc(cert.org || "") +
          (cert.period ? " &middot; " + esc(cert.period) : "") +
          "</p>" +
          "</div></article>"
        );
      })
      .join("");
  }

  /* ------------------------------------------------------------ text bind */
  function bindText() {
    var binds = {
      availability: (D.hero && D.hero.availability) || D.meta.role,
      heroIntro: D.hero && D.hero.intro,
      aboutHeading: D.about && D.about.heading,
      aboutLead: D.about && D.about.lead,
      contactHeading: D.contact && D.contact.heading,
      showreelHeading: D.showreel && D.showreel.heading,
      showreelLead: D.showreel && D.showreel.lead,
      contactBody: D.contact && D.contact.body,
      contactNote: D.contact && D.contact.note,
      email: D.contact && D.contact.email,
      name: D.meta && D.meta.name,
      note: D.footer && D.footer.note
    };

    Object.keys(binds).forEach(function (key) {
      var nodes = document.querySelectorAll('[data-bind="' + key + '"]');
      Array.prototype.forEach.call(nodes, function (node) {
        if (binds[key]) node.textContent = binds[key];
      });
    });

    document.title = (D.meta && D.meta.siteTitle) || document.title;

    if (D.hero && D.hero.portrait) {
      var img = document.querySelector('[data-bind="portrait"]');
      if (img) {
        img.src = D.hero.portrait;
        img.alt = D.hero.portraitAlt || (D.meta && D.meta.name) || "Portrait";
      }
    }

    var heroName = document.querySelector(".hero-title__name");
    if (heroName && D.meta) {
      var name = esc(D.meta.name || "");
      var accent = D.meta.nameAccent;
      if (accent && name.indexOf(esc(accent)) !== -1) {
        heroName.innerHTML =
          name.replace(esc(accent), "<em class=\"hero-title__accent\">" + esc(accent) + "</em>");
      } else {
        heroName.textContent = name;
      }
    }

    if (D.hero && D.hero.primaryCta && D.hero.primaryCta.label) {
      var p1 = byId("heroPrimaryCta");
      if (p1) {
        p1.href = D.hero.primaryCta.href;
        p1.querySelector("span").textContent = D.hero.primaryCta.label;
      }
    }
    if (D.hero && D.hero.secondaryCta && D.hero.secondaryCta.label) {
      var p2 = byId("heroSecondaryCta");
      if (p2) {
        p2.href = D.hero.secondaryCta.href;
        p2.querySelector("span").textContent = D.hero.secondaryCta.label;
      }
    }
  }

  /* ----------------------------------------------------------------- hero */
  function uniqueTechCount() {
    var set = {};
    (D.projects || []).forEach(function (p) {
      (p.stack || []).forEach(function (s) {
        set[s] = true;
      });
    });
    (D.skills || []).forEach(function (g) {
      (g.items || []).forEach(function (s) {
        set[s] = true;
      });
    });
    return Object.keys(set).length;
  }

  function statNumber(stat) {
    var label = String(stat.label || "").toLowerCase();
    if (stat.value) return stat.value;
    if (label.indexOf("project") !== -1) return (D.projects || []).length;
    if (label.indexOf("technolog") !== -1 || label.indexOf("skill") !== -1) {
      return uniqueTechCount();
    }
    return 0;
  }

  function renderStats() {
    var host = byId("heroStats");
    if (!host || !D.hero || !D.hero.stats) return;

    host.innerHTML = D.hero.stats
      .map(function (stat) {
        return (
          '<div data-count="' +
          statNumber(stat) +
          '" data-decimals="' +
          (stat.decimals || 0) +
          '" data-suffix="' +
          esc(stat.suffix || "") +
          '"><dt><span class="counter">0</span></dt><dd>' +
          esc(stat.label) +
          "</dd></div>"
        );
      })
      .join("");

    var floating = document.querySelector('[data-bind="statProjects"]');
    if (floating) floating.textContent = (D.projects || []).length;
  }

  function renderSocials() {
    var heroHost = byId("heroSocials");
    if (heroHost) {
      heroHost.innerHTML = socials()
        .map(function (s) {
          return (
            '<li><a class="social-btn" href="' +
            esc(s.url) +
            '"' +
            externalAttrs(s.url) +
            ' aria-label="' +
            esc(s.label + ": " + (s.handle || "")) +
            '">' +
            socialIcon(s.icon) +
            "<span>" +
            esc(s.label) +
            "</span></a></li>"
          );
        })
        .join("");
    }

    var contactHost = byId("contactLinks");
    if (contactHost) {
      var links = socials().map(function (s) {
        return (
          '<a class="contact-link" href="' +
          esc(s.url) +
          '"' +
          externalAttrs(s.url) +
          '><span class="contact-link__icon" aria-hidden="true">' +
          (s.icon === "linkedin"
            ? "in"
            : s.icon === "github"
              ? '<img src="assets/img/github.png" alt="" />'
              : icon(s.icon)) +
          '</span><span class="contact-link__label">' +
          esc(s.handle || s.label) +
          "</span>" +
          icon("arrow") +
          "</a>"
        );
      });

      if (D.contact && D.contact.resume) {
        links.push(
          '<a class="contact-link" href="' +
          esc(D.contact.resume) +
          '" target="_blank" rel="noopener"><span class="contact-link__icon" aria-hidden="true">' +
          icon("download") +
          '</span><span class="contact-link__label">' +
          esc(D.contact.resumeLabel || "Download resume (PDF)") +
          "</span>" +
          icon("arrow") +
          "</a>"
        );
      }

      contactHost.innerHTML = links.join("");
    }
  }

  /* ----------------------------------------------------------------- about */
  function renderAbout() {
    var paragraphs = byId("aboutParagraphs");
    if (paragraphs && D.about && D.about.paragraphs) {
      paragraphs.innerHTML = D.about.paragraphs
        .map(function (p) {
          return "<p>" + esc(p) + "</p>";
        })
        .join("");
    }

    var facts = byId("aboutFacts");
    if (facts && D.about && D.about.facts) {
      facts.innerHTML =
        '<p class="card-label">Quick facts</p><dl>' +
        D.about.facts
          .map(function (f) {
            return (
              '<div class="fact"><dt>' + esc(f.label) + "</dt><dd>" + esc(f.value) + "</dd></div>"
            );
          })
          .join("") +
        "</dl>";
    }

    var strengths = byId("aboutStrengths");
    if (strengths && D.about && D.about.strengths) {
      strengths.innerHTML = D.about.strengths
        .map(function (s) {
          return '<li><span class="chip chip--static">' + esc(s) + "</span></li>";
        })
        .join("");
    }
  }

  /* ---------------------------------------------------------------- skills */
  function renderSkills() {
    var host = byId("skillsGrid");
    if (host && D.skills) {
      host.innerHTML = D.skills
        .map(function (group) {
          return (
            '<article class="skill-group reveal">' +
            '<div class="skill-group__head"><h3>' +
            esc(group.group) +
            '</h3><span class="skill-group__count">' +
            (group.items || []).length +
            "</span></div>" +
            '<ul class="chip-list">' +
            (group.items || [])
              .map(function (item) {
                return "<li><span class=\"chip\">" + esc(item) + "</span></li>";
              })
              .join("") +
            "</ul></article>"
          );
        })
        .join("");
    }

    var track = byId("marqueeTrack");
    if (track && D.skills) {
      var words = [];
      D.skills.forEach(function (group) {
        (group.items || []).forEach(function (item) {
          words.push(item);
        });
      });
      var line = '<span class="marquee__item">' + words.map(esc).join("</span><span class=\"marquee__item\">") + "</span>";
      track.innerHTML = line + line;
    }
  }

  /* -------------------------------------------------------------- projects */
  function projectCard(project) {
    var actions = "";
    if (project.live) {
      actions +=
        '<a class="link-btn link-btn--live" href="' +
        esc(project.live) +
        '" target="_blank" rel="noopener noreferrer">' +
        icon("external") +
        "<span>Live demo</span></a>";
    }
    if (project.code) {
      actions +=
        '<a class="link-btn link-btn--code" href="' +
        esc(project.code) +
        '" target="_blank" rel="noopener noreferrer">' +
        icon("code") +
        "<span>Source code</span></a>";
    }

    var badges = "";
    if (project.live) {
      badges += '<span class="project-card__badge project-card__badge--live">Live</span>';
    } else if (project.featured) {
      badges += '<span class="project-card__badge">Featured</span>';
    }

    return (
      '<article class="project-card reveal' +
      (project.featured ? " project-card--featured" : "") +
      '" data-category="' +
      esc(project.category || "Other") +
      '">' +
      '<div class="project-card__media">' +
      badges +
      (project.image
        ? '<img src="' + esc(project.image) + '" alt="' + esc(project.title) + '" loading="lazy" decoding="async" />'
        : "") +
      "</div>" +
      '<div class="project-card__body">' +
      '<h3 class="project-card__title">' +
      esc(project.title) +
      "</h3>" +
      '<p class="project-card__summary">' +
      esc(project.summary) +
      "</p>" +
      '<div class="project-card__stack">' +
      (project.stack || []).map(function (s) {
        return "<span>" + esc(s) + "</span>";
      }).join("") +
      "</div>" +
      (actions ? '<div class="project-card__actions">' + actions + "</div>" : "") +
      "</div></article>"
    );
  }

  function renderProjects() {
    var grid = byId("projectGrid");
    var filters = byId("projectFilters");
    var projects = D.projects || [];
    if (!grid) return;

    grid.innerHTML = projects.map(projectCard).join("");

    if (!filters) return;

    var counts = {};
    var order = [];
    projects.forEach(function (p) {
      var c = p.category || "Other";
      if (!(c in counts)) {
        counts[c] = 0;
        order.push(c);
      }
      counts[c] += 1;
    });

    filters.innerHTML =
      '<button class="filter-btn is-active" type="button" data-filter="all">All<small>' +
      projects.length +
      "</small></button>" +
      order
        .map(function (c) {
          return (
            '<button class="filter-btn" type="button" data-filter="' +
            esc(c) +
            '">' +
            esc(c) +
            "<small>" +
            counts[c] +
            "</small></button>"
          );
        })
        .join("");

    var empty = byId("projectEmpty");

    filters.addEventListener("click", function (event) {
      var button = event.target.closest(".filter-btn");
      if (!button) return;

      var value = button.getAttribute("data-filter");
      Array.prototype.forEach.call(filters.querySelectorAll(".filter-btn"), function (b) {
        b.classList.toggle("is-active", b === button);
      });

      var shown = 0;
      Array.prototype.forEach.call(grid.querySelectorAll(".project-card"), function (card) {
        var match = value === "all" || card.getAttribute("data-category") === value;
        card.classList.toggle("is-hidden", !match);
        if (match) shown += 1;
      });

      if (empty) empty.hidden = shown !== 0;
    });
  }

  /* -------------------------------------------------------------- showreel */
  function renderShowreel() {
    var cfg = D.showreel;
    var host = byId("showreelBlock");
    var video = byId("showreelVideo");
    if (!cfg || !cfg.src || !host || !video) return;

    video.poster = cfg.poster || "";
    video.setAttribute("aria-label", cfg.alt || "Portfolio showreel video");
    if (cfg.width && cfg.height) {
      video.setAttribute("width", cfg.width);
      video.setAttribute("height", cfg.height);
    }

    byId("showreelCaption").textContent = cfg.caption || "";
    byId("showreelHint").textContent = cfg.soundHint || "";

    byId("showreelFacts").innerHTML = (cfg.facts || [])
      .map(function (f) {
        return "<li><strong>" + esc(f.value) + "</strong><span>" + esc(f.label) + "</span></li>";
      })
      .join("");

    /* keep the clip out of the initial download — the observer attaches the
       file only once the section is close, so 3.6 MB never delays first paint */
    video.setAttribute("data-src", cfg.src);
    host.hidden = false;
  }

  /* ---------------------------------------------- showreel: autoplay + sound */
  function setupShowreelVideo() {
    var host = byId("showreelBlock");
    var video = byId("showreelVideo");
    var soundBtn = byId("showreelSound");
    if (!host || !video) return;

    /* iOS only honours the muted *property*, not just the attribute */
    video.muted = true;
    video.defaultMuted = true;

    var loaded = false;
    var userChoseSound = false;

    function attach() {
      if (loaded) return;
      loaded = true;
      var src = video.getAttribute("data-src");
      if (!src) return;
      video.src = src;
      video.load();
      /* the play mark stays hidden until there is a real frame to sit on */
      video.addEventListener(
        "loadeddata",
        function () {
          host.classList.add("is-ready");
        },
        { once: true }
      );
    }

    function paint() {
      var muted = video.muted;
      host.classList.toggle("is-paused", video.paused);
      if (!soundBtn) return;
      soundBtn.setAttribute("aria-pressed", String(!muted));
      soundBtn.setAttribute("aria-label", muted ? "Unmute video" : "Mute video");
      soundBtn.querySelector("use").setAttribute("href", muted ? "#i-volume-off" : "#i-volume-on");
      host.classList.toggle("is-unmuted", !muted);
    }

    function start() {
      /* the sound stays off unless the visitor asked for it */
      if (userChoseSound) video.muted = false;
      var attempt = video.play();
      if (attempt && typeof attempt.catch === "function") {
        /* autoplay refused (low-power mode, data saver, strict settings):
           leave the play mark up so they can start it themselves */
        attempt.catch(function () {
          host.classList.add("is-blocked");
          paint();
        });
      }
    }

    /* attach, then play as soon as there is a frame to play */
    function playWhenReady() {
      attach();
      if (video.readyState >= 2) {
        start();
        return;
      }
      video.addEventListener("loadeddata", start, { once: true });
    }

    if (soundBtn) {
      soundBtn.addEventListener("click", function () {
        /* turning the sound on or off must never stop the clip */
        var wantSound = video.muted;
        userChoseSound = wantSound;
        video.muted = !wantSound;
        if (video.paused) playWhenReady();
        paint();
      });
    }

    /* clicking the picture toggles play/pause, so a clip stopped by the
       observer (or refused by the browser) can always be restarted */
    video.addEventListener("click", function () {
      if (video.paused) playWhenReady();
      else video.pause();
      paint();
    });

    ["play", "pause", "volumechange", "ended"].forEach(function (evt) {
      video.addEventListener(evt, paint);
    });

    var bar = byId("showreelBar");
    if (bar) {
      video.addEventListener("timeupdate", function () {
        bar.style.width = video.duration ? (video.currentTime / video.duration) * 100 + "%" : "0%";
      });
    }

    paint();

    if (!("IntersectionObserver" in window)) {
      attach();
      return;
    }

    /* fetch a little before it is needed, but only start it when it is on screen */
    var loader = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          attach();
          loader.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );

    var player = new IntersectionObserver(
      function (entries) {
        var entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
          /* visitors who asked for less motion get the poster and a play
             mark rather than a clip that starts on its own */
          if (reduceMotion) return;
          playWhenReady();
        } else if (!video.paused) {
          video.pause();
        }
      },
      { threshold: [0, 0.35, 0.75] }
    );

    loader.observe(host);
    player.observe(host);
  }

  /* ------------------------------------------------------------ experience */
  function renderTimeline() {
    var host = byId("timeline");
    if (!host || !D.experience) return;

    host.innerHTML = D.experience
      .map(function (job) {
        return (
          '<li class="timeline-item reveal">' +
          '<span class="timeline-item__icon" aria-hidden="true">' +
          icon(job.icon || "code") +
          "</span>" +
          '<div><div class="timeline-item__head">' +
          '<h3 class="timeline-item__role">' +
          esc(job.role) +
          "</h3>" +
          (job.period ? '<span class="timeline-item__period">' + esc(job.period) + "</span>" : "") +
          "</div>" +
          (job.org ? '<p class="timeline-item__org">' + esc(job.org) + "</p>" : "") +
          (job.summary ? '<p class="timeline-item__summary">' + esc(job.summary) + "</p>" : "") +
          ((job.points || []).length
            ? '<ul class="tick-list">' +
              job.points
                .map(function (p) {
                  return "<li>" + esc(p) + "</li>";
                })
                .join("") +
              "</ul>"
            : "") +
          ((job.tools || []).length
            ? '<div class="tool-list">' +
              job.tools
                .map(function (t) {
                  return "<span>" + esc(t) + "</span>";
                })
                .join("") +
              "</div>"
            : "") +
          "</div></li>"
        );
      })
      .join("");
  }

  /* ------------------------------------------------------------- education */
  function renderEducation() {
    var host = byId("eduGrid");
    if (!host || !D.education) return;

    host.innerHTML = D.education
      .map(function (item) {
        return (
          '<article class="edu-card reveal">' +
          '<span class="edu-card__icon" aria-hidden="true">' +
          icon(item.icon || "cap") +
          "</span>" +
          "<div>" +
          '<h3 class="edu-card__title">' +
          esc(item.title) +
          "</h3>" +
          '<p class="edu-card__meta">' +
          icon("pin") +
          "<span>" +
          esc(item.org || "") +
          (item.location ? " &middot; " + esc(item.location) : "") +
          "</span>" +
          (item.period ? '<span class="edu-card__period">' + esc(item.period) + "</span>" : "") +
          "</p></div>" +
          ((item.points || []).length
            ? '<ul class="tick-list">' +
              item.points
                .map(function (p) {
                  return "<li>" + esc(p) + "</li>";
                })
                .join("") +
              "</ul>"
            : "") +
          "</article>"
        );
      })
      .join("");
  }

  /* ---------------------------------------------------------- copy to email */
  function setupCopyEmail() {
    var button = byId("copyEmail");
    if (!button) return;
    button.setAttribute("data-email", (D.contact && D.contact.email) || button.getAttribute("data-email"));

    button.addEventListener("click", function () {
      var email = button.getAttribute("data-email") || "";
      var label = button.querySelector(".email-chip__text");
      var use = button.querySelector(".ico--copy use");
      var done = function () {
        button.classList.add("is-copied");
        if (use) use.setAttribute("href", "#i-check");
        if (label) {
          var original = label.textContent;
          label.textContent = (D.contact && D.contact.copiedLabel) || "Copied";
          window.setTimeout(function () {
            label.textContent = original;
            button.classList.remove("is-copied");
            if (use) use.setAttribute("href", "#i-copy");
          }, 2000);
        }
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, legacyCopy);
      } else {
        legacyCopy();
      }

      function legacyCopy() {
        var field = document.createElement("textarea");
        field.value = email;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        try {
          document.execCommand("copy");
          done();
        } catch (error) {
          /* clipboard unavailable — the address is visible on screen anyway */
        }
        document.body.removeChild(field);
      }
    });
  }

  /* ------------------------------------------------------------- behaviour */
  function pauseMarquee() {
    var track = byId("marqueeTrack");
    if (!track || !("IntersectionObserver" in window)) return;

    /* a never-ending transform animation costs CPU forever, even off-screen */
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          track.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
        });
      },
      { threshold: 0 }
    );

    observer.observe(track);
  }

  function setupReveal() {
    var nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || reduceMotion) {
      Array.prototype.forEach.call(nodes, function (n) {
        n.classList.add("is-in");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    Array.prototype.forEach.call(nodes, function (node) {
      var delay = node.getAttribute("data-reveal-delay");
      if (delay) node.style.setProperty("--reveal-delay", delay);
      observer.observe(node);
    });
  }

  function animateCounters() {
    var host = byId("heroStats");
    if (!host) return;

    var items = host.querySelectorAll("[data-count]");

    var run = function (node) {
      var target = parseFloat(node.getAttribute("data-count")) || 0;
      var decimals = parseInt(node.getAttribute("data-decimals"), 10) || 0;
      var suffix = node.getAttribute("data-suffix") || "";
      var out = node.querySelector(".counter");

      if (reduceMotion) {
        out.textContent = target.toFixed(decimals) + suffix;
        return;
      }

      var duration = 1200;
      var start = null;

      function step(timestamp) {
        if (start === null) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        out.textContent = (target * eased).toFixed(decimals) + suffix;
        if (progress < 1) window.requestAnimationFrame(step);
      }

      window.requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(items, run);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          run(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );

    Array.prototype.forEach.call(items, function (node) {
      observer.observe(node);
    });
  }

  function setupHeader() {
    var header = document.querySelector(".site-header");
    var bar = byId("progressBar");
    var toTop = byId("toTop");
    var ticking = false;

    function onScroll() {
      var y = window.pageYOffset || document.documentElement.scrollTop;
      var max = document.documentElement.scrollHeight - window.innerHeight;

      if (header) header.classList.toggle("is-scrolled", y > 12);
      if (toTop) toTop.classList.toggle("is-visible", y > window.innerHeight * 0.9);
      if (bar) bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";

      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(onScroll);
      },
      { passive: true }
    );

    onScroll();

    if (toTop) {
      toTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      });
    }
  }

  function setupMobileMenu() {
    var toggle = byId("navToggle");
    var menu = byId("mobileMenu");
    var header = document.querySelector(".site-header");
    if (!toggle || !menu) return;

    function setOpen(open) {
      menu.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (header) header.classList.toggle("is-menu-open", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(menu.hidden);
    });

    menu.addEventListener("click", function (event) {
      if (event.target.tagName === "A") setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) setOpen(false);
    });
  }

  function setupScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
    if (!links.length || !("IntersectionObserver" in window)) return;

    var map = {};
    links.forEach(function (link) {
      var id = link.getAttribute("href").replace("#", "");
      var section = document.getElementById(id);
      if (section) map[id] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) {
            link.classList.remove("is-active");
          });
          if (map[entry.target.id]) map[entry.target.id].classList.add("is-active");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    Object.keys(map).forEach(function (id) {
      observer.observe(document.getElementById(id));
    });
  }

  function setupRotator() {
    var host = byId("roleRotator");
    if (!host || !D.hero || !D.hero.roles || !D.hero.roles.length) return;

    var roles = D.hero.roles;
    var index = 0;

    host.textContent = roles[0];

    if (reduceMotion) return;

    window.setInterval(function () {
      host.classList.remove("is-in");
      host.classList.add("is-out");
      window.setTimeout(function () {
        index = (index + 1) % roles.length;
        host.textContent = roles[index];
        host.classList.remove("is-out");
        host.classList.add("is-in");
      }, 320);
    }, 2800);
  }

  function setupYear() {
    var year = byId("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------------ init */
  function init() {
    bindText();
    renderStats();
    renderSocials();
    renderSites();
    renderAbout();
    renderSkills();
    renderProjects();
    renderShowreel();
    setupShowreelVideo();
    renderTimeline();
    renderEducation();
    renderCertifications();
    setupCopyEmail();
    setupReveal();
    animateCounters();
    setupHeader();
    setupMobileMenu();
    setupScrollSpy();
    setupRotator();
    pauseMarquee();
    setupYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();