export function Links() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const offset = 100;
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {links.map(({ id, label }) => (
        <div
          key={id}
          className="btn"
          onClick={() => scrollToSection(id)}
        >
          {label}
        </div>
      ))}
    </>
  );
}