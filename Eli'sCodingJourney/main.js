const words = new URLSearchParams(window.location.search);

function cleanAndCap(str) {
    if (!str) return null;
    let temp = str.trim();
    return temp[0].toUpperCase() + temp.substring(1);
  }
  
  // Assigning the variables with values used in the story
  const first = cleanAndCap(words.get("name-1"));
  const second = cleanAndCap(words.get("name-2"));
  
  const answer = cleanAndCap(words.get("answer"));
  const choice = answer === "Yes" ? "" : ` but changed their mind after <strong>${first}</strong> threated suicide.`;
  
  const speed = words.get("speed");
  const adj1 = words.get("adj");
  
  const place = words.get("place");

  const quote = words.get("motiv");
  
  const verb1 = words.get("verb");
  const num1 = words.get("num");
 
  const adj2 = words.get("adj2")
  const story = `<p>Once upon a time, there were two Chipotle employees named <strong>${first}</strong> and <strong>${second}</strong>. They <strong>${verb1}</strong> together every day and loved <strong>${adj1}</strong> tacos with a lot of sour cream. One day, they were working the same shift and ended up leaving at the same time. As they chatted and laughed while walking to their cars, they started to realize that they had feelings for each other.</p>
  
  <p>'Do you want to go out with me sometime?'<strong>${first}</strong> asked.</p>

  <p><strong>${second}</strong> said <strong>${answer}</strong>, ${choice} and so they went on their first date to a steakhouse. But instead of dressing up in fancy clothes, they decided to wear silly outfits. <strong>${first}</strong> wore a cowboy hat and boots, while <strong>${second}</strong> wore a clown nose and rainbow suspenders. Everyone in the restaurant turned to look at them, but they didn't care. They were having too much fun.</p>

  <p>As they continued to date, they discovered that they had a lot in common. They both lived in <strong>${place},</strong> and worked at chipotle for <strong>${num1}</strong> hours a week. They even started to coordinate their Chipotle uniforms to match each other.</p>

  <p>One day, <strong>${first}</strong> suggested that they take a road trip to try different types of Mexican food. 'We could travel to the farlands and try the elusive Panchero's burrito', <strong>${first}</strong> said.</p>

  <p>'That sounds amazing, but we should probably take a plane instead of driving a car,' <strong>${second}</strong> suggested.</p>
<p>'But driving a car would be more adventurous,' <strong>${first}</strong> replied.</p>

  <p>They decided to compromise and take a car with no leg room. As they drove, they listened to their favorite music and chatted about their dreams for the future. Suddenly, they heard a <strong>${adj2}</strong> noise coming from the engine.</p>

  <p>'What's going on?' <strong>${second}</strong> asked.</p>

  <p>'I don't know, but the car is going <strong> ${speed}</strong>,' <strong>${first}</strong> said.</p>

  <p><strong>${second}</strong> suggested they pull over and check it out. They found that a belt had come loose and needed to be tightened. Fortunately, <strong>${first}</strong> had a toolkit in the trunk and was able to fix it. As they continued their journey, they realized that even though they may have different opinions, they could always work together to overcome any obstacle.</p>

  <p>And as the motivational quote goes,<strong>${motiv}</strong> And for <strong>${first}</strong> and <strong>${second}</strong>, that meant loving each other with every bite of every burrito they shared.</p>`;


  const storyEl = document.getElementById("story");
 storyEl.innerHTML = story;



  