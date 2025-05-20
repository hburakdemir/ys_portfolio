import { useEffect } from 'react';

const ScrollSpy = ({ sectionIds = [] }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            window.history.replaceState(null, null, `#${id}`);
          }
        });
      },
      {
        rootMargin: '0px 0px -50% 0px', // Yarım ekran yukarıdayken aktif say
        threshold: 0.5,
      }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return null;
};

export default ScrollSpy;
