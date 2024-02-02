function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if(section) {
    const offset = 60;
    const sectionPosition = section.offsetTop - offset;
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });
  }
}