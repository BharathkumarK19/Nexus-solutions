document.addEventListener("DOMContentLoaded", () => {
  
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const isExpanded = navLinks.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", isExpanded);
      menuToggle.textContent = isExpanded ? "✕" : "☰"; 
    });
  }

  
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("projects") || entry.target.classList.contains("domains")) {
          entry.target.classList.add("animate__animated", "animate__fadeInLeft");
        } else if (entry.target.classList.contains("how-it-works")) {
          entry.target.classList.add("animate__animated", "animate__fadeInRight");
        } else {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
        }
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

 
  document.querySelectorAll(".projects, .domains, .how-it-works, .domains .header-section, .how-it-works h2").forEach(element => {
    observer.observe(element);
  });


  const projectData = {
    "Smart Attendance System": {
      summary: "An AI-powered attendance tracking system using facial recognition for accurate and automated record-keeping.",
      details: "This system leverages advanced facial recognition technology powered by AI to automate attendance tracking. It ensures high accuracy, reduces manual errors, and integrates seamlessly with existing databases for real-time updates and reporting.",
      team: [
        { name: "Lokesh",  image: "https://ik.imagekit.io/kofq4cdghu/unnamed.jpg?updatedAt=1760094756157" },
        
        { name: "Varshith Naidu",  image: "https://ik.imagekit.io/kofq4cdghu/IMG-20250917-WA0086(1).jpg?updatedAt=1760094980018" }
      ]
    },
    "Automated Timetable Management System": {
      summary: "A smart scheduling system that generates optimized timetables for educational institutions based on faculty and student availability.",
      details: "An intelligent scheduling tool designed for educational institutions. It uses optimization algorithms to create conflict-free timetables based on faculty availability, student preferences, and resource constraints, saving hours of manual planning.",
      team: [
        { name: "Lokesh Reddy.A",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.39.51%20AM.jpeg?updatedAt=1760073049927" },
        { name: "Gopinadh.V",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.55.20%20AM.jpeg?updatedAt=1760074230579" },
        { name: "Hari.K",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.29.49%20AM.jpeg?updatedAt=1760072973038" },
         { name: "Girivardhan.K",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.37.34%20AM.jpeg?updatedAt=1760072974650" },
        { name: "Deekshitha.M",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.37.49%20AM.jpeg?updatedAt=1760072973031" },
        { name: "Jaya manideep.B",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.27.49%20AM.jpeg?updatedAt=1760072972669" },
          { name: "VishnuVardhan.A",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.28.29%20AM.jpeg?updatedAt=1760072972170" },
        { name: "Madhusudhan.M",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2011.09.30%20AM.jpeg?updatedAt=1760074790613" },
        { name: "Bharath Kumar.K",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.29.51%20AM.jpeg?updatedAt=1760072973494" },
      ]
    },
    "Crowd-Sheild": {
      summary: "AI-powered crowd monitoring for public safety.",
      details: "An AI-driven solution for monitoring crowds in public spaces to enhance safety. It detects unusual patterns, estimates crowd density, and alerts authorities in real-time to prevent incidents like stampedes or security breaches.",
      team: [
    { name: "Lokesh Reddy.A",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.39.51%20AM.jpeg?updatedAt=1760073049927" },
        { name: "Gopinadh.V",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.55.20%20AM.jpeg?updatedAt=1760074230579" },
        { name: "Hari.K",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.29.49%20AM.jpeg?updatedAt=1760072973038" },
         { name: "Girivardhan.K",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.37.34%20AM.jpeg?updatedAt=1760072974650" }
      ]
    },
    "Movie Recommendation": {
      summary: "🎬 Let AI choose your next favorite movie!",
      details: "A machine learning-based recommender system that analyzes user preferences, viewing history, and ratings to suggest personalized movies. It uses collaborative filtering and content-based algorithms for accurate recommendations.",
      team: [
        { name: "Jaya manideep.b",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.27.49%20AM.jpeg?updatedAt=1760072972669" }

      ]
    },
    "Hotel Tfi Website": {
      summary: "A website which is useful for booking food in Nashik.",
      details: "A user-friendly web platform for booking food from   Tfi Hotel in Nashik. It features real-time menus and reviews to enhance the dining experience for users.",
      team: [
        { name: "Prasad.B",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2012.03.03%20PM.jpeg?updatedAt=1760078322514" },
        { name: "Mallikarjuna.C",  image: "https://ik.imagekit.io/kofq4cdghu/IMG_20241008_135227_1_.jpg?updatedAt=1759896755572" },
        { name: "Raghu.K",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-08%20at%2010.27.23%20AM.jpeg?updatedAt=1760072973601" },
         { name: "Poojitha Reddy.S",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.24.52%20AM.jpeg?updatedAt=1760072972748" },
          { name: "Shirisha.S",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-08%20at%2011.25.48%20AM.jpeg?updatedAt=1760072973509" }
      ]
    },
    "Blood-Bank Management Sytem": {
      summary: "Locate blood units in real-time.",
      details: "A comprehensive system for managing blood banks, allowing real-time tracking of blood units, donor information, and requests. It facilitates quick matching and distribution to save lives in emergencies.",
      team: [
        { name: "VishnuVardhan",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.28.29%20AM.jpeg?updatedAt=1760072972170" }

      ]
    },
    "Music Recommendation": {
      summary: "Personalized music suggestions in real-time.",
      details: "This system provides personalized music suggestions based on user listening habits, mood, and trends. It employs AI to analyze audio features and user feedback for real-time, tailored playlists.",
      team: [
        { name: "Lokesh Reddy.A",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.39.51%20AM.jpeg?updatedAt=1760073049927" }
     
      ]
    },
    "Future Weather prediction": {
      summary: "Accurate weather forecasts for future.",
      details: "An advanced forecasting tool that predicts future weather conditions using machine learning models trained on historical data, satellite imagery, and atmospheric patterns for high accuracy.",
      team: [
       { name: "Lokesh Reddy.A",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.39.51%20AM.jpeg?updatedAt=1760073049927" },
       { name: "VishnuVardhan",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.28.29%20AM.jpeg?updatedAt=1760072972170" },
       { name: "Deekshitha.M",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.37.49%20AM.jpeg?updatedAt=1760072973031" },
       { name: "Shirisha.S",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-08%20at%2011.25.48%20AM.jpeg?updatedAt=1760072973509" },
       { name: "Avinash.D",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2011.02.22%20AM.jpeg?updatedAt=1760075555781" },
       { name: "Yashwanth.A",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.26.09%20AM.jpeg?updatedAt=1760072974135" }
      ]
    },
    "AI-Powered Resume Analyzer": {
      summary: "AI evaluates resumes for job fit.",
      details: "An AI tool that scans and evaluates resumes against job descriptions, highlighting strengths, gaps, and fit scores. It uses NLP to provide actionable insights for recruiters and applicants.",
      team: [
      
        { name: "Murali Krishna.B", image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.37.00%20AM.jpeg?updatedAt=1760072973049" }
      ]
    },
    "Rain Prediction": {
      summary: "AI forecasts rainfall with precision.",
      details: "A precise AI model for forecasting rainfall using meteorological data, radar inputs, and historical trends. It helps in agriculture, disaster management, and urban planning with reliable predictions.",
      team: [
         { name: "Mallikarjuna.C",  image: "https://ik.imagekit.io/kofq4cdghu/IMG_20241008_135227_1_.jpg?updatedAt=1759896755572" },
        { name: "Raghu.K",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-08%20at%2010.27.23%20AM.jpeg?updatedAt=1760072973601" },
         { name: "Jaya manideep.b",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.27.49%20AM.jpeg?updatedAt=1760072972669" },
         { name: "Hari.K",  image: "https://ik.imagekit.io/kofq4cdghu/WhatsApp%20Image%202025-10-10%20at%2010.29.49%20AM.jpeg?updatedAt=1760072973038" },
          { name: "Ashish.C",  image: "https://ik.imagekit.io/kofq4cdghu/1758679225122.jpg?updatedAt=1760073049933" },

      ]
    }
  };


  const projectsContainer = document.getElementById("projectsContainer");
  Object.keys(projectData).forEach((projectName, index) => {
    const project = projectData[projectName];
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${0.2 * (index + 1)}s`;
    card.innerHTML = `
      <h3>${projectName}</h3>
      <p>${project.summary}</p>
      <a href="#" class="view-details-btn" data-project="${projectName}">View Details</a>
    `;
    projectsContainer.appendChild(card);
  });

  
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDetails = document.getElementById("modalDetails");
  const teamList = document.getElementById("teamList");
  const closeModal = document.getElementById("closeModal");
  const closeSpan = document.querySelector(".close");

  
  function addViewDetailsListeners() {
    document.querySelectorAll(".view-details-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const projectName = btn.getAttribute("data-project");
        const data = projectData[projectName];

        if (data) {
          modalTitle.textContent = projectName;
          modalDetails.textContent = data.details;
          
        
          teamList.innerHTML = "";
          data.team.forEach(member => {
            const memberDiv = document.createElement("div");
            memberDiv.className = "team-member";
            memberDiv.innerHTML = `
              <img src="${member.image}" alt="${member.name}" onerror="this.src='https://via.placeholder.com/80x80/cccccc/ffffff?text=No+Image'">
              <h5>${member.name}</h5>
              
            `;
            teamList.appendChild(memberDiv);
          });
          
          modal.style.display = "block";
          document.body.style.overflow = "hidden"; 
        }
      });
    });
  }


  addViewDetailsListeners();

  
  function closeModalFunc() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
  }

  closeModal.addEventListener("click", closeModalFunc);
  closeSpan.addEventListener("click", closeModalFunc);


  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModalFunc();
    }
  });

  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModalFunc();
    }
  });
});