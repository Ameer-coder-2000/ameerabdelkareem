/* Subtle pointer interaction for fine-pointer devices. */
(function () {
  "use strict";

  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!finePointer.matches || reducedMotion.matches) return;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function clearTilt(card) {
    card.style.removeProperty("--pointer-x");
    card.style.removeProperty("--pointer-y");
    card.style.removeProperty("--tilt-x");
    card.style.removeProperty("--tilt-y");
  }

  function setupTiltCards() {
    var cards = document.querySelectorAll(
      ".project-card, .skill-group, .edu-card, .cert-card, " +
      ".facts-card, .strengths-card, .portrait__frame"
    );

    Array.prototype.forEach.call(cards, function (card) {
      card.classList.add("motion-card");

      card.addEventListener("pointermove", function (event) {
        if (event.pointerType && event.pointerType !== "mouse") return;

        var rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        var x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
        var y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
        var tiltX = (x - 0.5) * 7;
        var tiltY = (0.5 - y) * 7;

        card.style.setProperty("--pointer-x", (x * 100).toFixed(1) + "%");
        card.style.setProperty("--pointer-y", (y * 100).toFixed(1) + "%");
        card.style.setProperty("--tilt-x", tiltX.toFixed(2) + "deg");
        card.style.setProperty("--tilt-y", tiltY.toFixed(2) + "deg");
      });

      card.addEventListener("pointerleave", function () {
        clearTilt(card);
      });
    });
  }

  function setupPortraitParallax() {
    var hero = document.querySelector(".hero-media");
    if (!hero) return;

    var floaters = hero.querySelectorAll(".float-card");
    Array.prototype.forEach.call(floaters, function (floater) {
      floater.classList.add("pointer-float");
    });

    hero.addEventListener("pointermove", function (event) {
      if (event.pointerType && event.pointerType !== "mouse") return;

      var rect = hero.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      var x = clamp((event.clientX - rect.left) / rect.width - 0.5, -0.5, 0.5) * 2;
      var y = clamp((event.clientY - rect.top) / rect.height - 0.5, -0.5, 0.5) * 2;

      if (floaters[0]) {
        floaters[0].style.setProperty("--float-x", (x * 10).toFixed(1) + "px");
        floaters[0].style.setProperty("--float-y", (y * 8).toFixed(1) + "px");
      }
      if (floaters[1]) {
        floaters[1].style.setProperty("--float-x", (x * -12).toFixed(1) + "px");
        floaters[1].style.setProperty("--float-y", (y * -9).toFixed(1) + "px");
      }
    });

    hero.addEventListener("pointerleave", function () {
      Array.prototype.forEach.call(floaters, function (floater) {
        floater.style.removeProperty("--float-x");
        floater.style.removeProperty("--float-y");
      });
    });
  }

  function setupMagneticControls() {
    var controls = document.querySelectorAll(
      ".hero-cta .btn, .header-actions .btn, .social-row a, " +
      ".email-chip, .contact-link"
    );

    Array.prototype.forEach.call(controls, function (control) {
      control.classList.add("magnetic-control");

      control.addEventListener("pointermove", function (event) {
        if (event.pointerType && event.pointerType !== "mouse") return;

        var rect = control.getBoundingClientRect();
        var x = (event.clientX - rect.left - rect.width / 2) * 0.14;
        var y = (event.clientY - rect.top - rect.height / 2) * 0.14;

        control.style.setProperty("--mag-x", clamp(x, -5, 5).toFixed(1) + "px");
        control.style.setProperty("--mag-y", clamp(y, -5, 5).toFixed(1) + "px");
      });

      control.addEventListener("pointerleave", function () {
        control.style.removeProperty("--mag-x");
        control.style.removeProperty("--mag-y");
      });
    });
  }

  function init() {
    if (reducedMotion.matches) return;
    setupTiltCards();
    setupPortraitParallax();
    setupMagneticControls();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
