const textArray = [
    "Data Scraping",
    "Web & App Automation",
    "Data Visualization"
  ];
  let currentIndex = 0;
  let charIndex = 0;
  const textContainer = document.getElementById('text-container');
  
  function typeText() {
    if (charIndex < textArray[currentIndex].length) {
      textContainer.textContent += textArray[currentIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100); // Typing speed
    } else {
      setTimeout(eraseText, 2000); // Wait 2 seconds before erasing
    }
  }
  
  function eraseText() {
    if (charIndex > 0) {
      textContainer.textContent = textArray[currentIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, 50); // Erasing speed
    } else {
      currentIndex = (currentIndex + 1) % textArray.length; // Move to the next text
      setTimeout(typeText, 500); // Wait before typing the next text
    }
  }
  
  // Start the animation
  typeText();