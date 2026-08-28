export function scrollDown(local) {
    document
      .getElementById(local)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }