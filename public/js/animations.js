export const showcaseAnimation = () => {
  const title = document.querySelector(".logo");
  const box = document.querySelector(".email-box");

  let tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });

  tl.from(title, { y: "-150%", ease: "bounce.out" });
  tl.from([box, ".subtitle", ".definition"], { opacity: 0 }, "-=.5");
};

export const contentAnimation = () => {
  const wagons = document.querySelectorAll(".wagons ul li");

  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".content",
      start: "top 50%",
      end: "end 20%",
      toggleActions: "play none none none"
    }
  });

  tl.from(".description", { scale: 0, duration: 1 });
  tl.to(".illustration", { x: 0, ease: "back.out(2)", duration: 3 }, "-=1");
  tl.from(".wagons h2", { opacity: 0, duration: 1 });
  tl.from(
    wagons,
    {
      x: "-150%",
      ease: "power2.out",
      duration: 1,
      stagger: 0.2
    },
    "-=1"
  );
};
