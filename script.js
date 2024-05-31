const emergencies = [
  
"Burns",
"Poisoning",
"Drug Overdose",
"Diabetic Emergencies",
"Drowning",
"Heat Stroke",
"Hypothermia",
"Heart Attack (Myocardial Infarction)",
"Stroke (Cerebrovascular Accident)",
"Severe Allergic Reaction (Anaphylaxis)",
"Asthma Attack",
"Choking",
"Severe Bleeding (Hemorrhage)",
"Head Injury",
"Seizure",
"Shock (Hypovolemic, Septic, Anaphylactic)",
"Fractures (Broken Bones)",
"Cardiac Arrest",
"Chest Pain (Angina)",
"Appendicitis",
"Acute Abdominal Pain",
"Spinal Injury",
"Eye Injury",
"Electric Shock",
"Eclampsia (Pregnancy-related Hypertension)",
"Pneumothorax (Collapsed Lung)",
"Fainting (Syncope)"


];

document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("emergencySearch");
  const emergencyList = document.getElementById("emergencyList");

  if (searchInput) {
    searchInput.addEventListener("input", function() {
      const searchText = this.value.toLowerCase();
      const matchingEmergencies = emergencies.filter(emergency =>
        emergency.toLowerCase().includes(searchText)
      );

      emergencyList.innerHTML = "";
      matchingEmergencies.forEach(emergency => {
        const option = document.createElement("div");
        option.innerHTML = `<strong>${emergency.substr(0, searchText.length)}</strong>${emergency.substr(searchText.length)}`;
        option.addEventListener("click", function() {
          searchInput.value = emergency;
          emergencyList.innerHTML = "";
        });
        emergencyList.appendChild(option);
      });
    });

    document.getElementById("emergencyForm").addEventListener("submit", function(event) {
      event.preventDefault();
      const selectedEmergency = searchInput.value;
      window.location.href = `second_page.html?emergency=${encodeURIComponent(selectedEmergency)}`;
    });
  }

  if (window.location.pathname.endsWith('second_page.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedEmergency = urlParams.get("emergency");
    const instructionsDiv = document.getElementById("instructions");
    const instructions = getInstructions(selectedEmergency);

    if (instructions) {
      instructionsDiv.innerHTML = instructions;
    } else {
      instructionsDiv.innerHTML = "No instructions available for this emergency.";
    }
  }
});

function getInstructions(emergency) {
  switch (emergency.toLowerCase()) {
    case 'heart attack (myocardial infarction)':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> This situation requires professional care. Please call <strong>999</strong> immediately.
        </div>
        <div class="container1">
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take while the ambulance is coming:</h5>
          <div class="instruction-box1">Have the person sit or lie down in a comfortable position.</div>
          <div class="instruction-box2">Loosen any tight clothing and reassure the person.</div>
          <div class="instruction-box3">If the person has been prescribed nitroglycerin and it is within reach, assist them in taking it.</div>
          <div class="instruction-box4">Monitor the person's condition while waiting for medical help.</div>
        </div>`;
    case 'stroke':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> This situation requires professional care. Please call <strong>999</strong> immediately.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take while the ambulance is coming:</h5>
          <div class="instruction-box">Help the person sit or lie down in a comfortable position.</div>
          <div class="instruction-box">Loosen any tight clothing and reassure the person.</div>
          <div class="instruction-box">Do not give the person anything to eat or drink.</div>
          <div class="instruction-box">Monitor the person's condition while waiting for medical help.</div>
        </div>`;
    case 'burns':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> If severe or covering a large area, seek medical help immediately.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Remove the person from the source of the burn.</div>
          <div class="instruction-box2">Cool the burn with cool (not cold) running water for at least 20 minutes.</div>
          <div class="instruction-box3">Remove any clothing or jewelry near the burn area, but do not attempt to remove anything sticking to the burn.</div>
          <div class="instruction-box4">Cover the burn with a sterile dressing or clean cloth (non-stick).</div>
          <div class="instruction-box5">Do not pop blisters to avoid infections.</div>
          <div class="instruction-box6">Do not use sprays, ointments, greases, or butter on the burn.</div>
        </div>`;
    case 'poisoning':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 if unconscious, having difficulty breathing, or having seizures.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">If conscious and alert, call the Poison Control Center or seek medical help.</div>
          <div class="instruction-box2">Provide information about the substance ingested.</div>
          <div class="instruction-box3">Do not induce vomiting unless instructed by medical professionals.</div>
          <div class="instruction-box4">Do not give anything to eat or drink.</div>
        </div>`;
    case 'drug overdose':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 if unconscious, having difficulty breathing, or having seizures.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Administer overdose reversal medication like naloxone.</div>
          <div class="instruction-box2">Keep the person awake and breathing.</div>
          <div class="instruction-box3">Lay the person on their side to prevent choking.</div>
          <div class="instruction-box4">Do not attempt to induce vomiting.</div>
          <div class="instruction-box5">Provide information about the type and amount of drug taken to medical professionals.</div>
        </div>`;
    case 'diabetic emergencies':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 if unconscious or having a seizure.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">If conscious but experiencing symptoms of hypoglycemia, give sugar.</div>
          <div class="instruction-box2">If conscious but experiencing symptoms of hyperglycemia, encourage water intake.</div>
          <div class="instruction-box3">Monitor the person's condition and provide assistance.</div>
          <div class="instruction-box4">Be prepared to do CPR if the person becomes unresponsive.</div>
        </div>`;
    case 'drowning':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 and continue to provide first aid.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Remove the person from the water immediately.</div>
          <div class="instruction-box2">Alert the lifeguard or call for help.</div>
          <div class="instruction-box3">Throw a flotation device or extend a long pole for the drowning person.</div>
          <div class="instruction-box4">Check for breathing and pulse. Start CPR if necessary.</div>
          <div class="instruction-box5">Place the person in the recovery position if breathing.</div>
        </div>`;
    case 'heat stroke':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Seek medical help immediately.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Move the person to a cooler place and remove excess clothing.</div>
          <div class="instruction-box2">Cool the person with water and ice packs.</div>
          <div class="instruction-box3">Cover with cool, damp sheets and offer water if able to swallow.</div>
        </div>`;
    case 'hypothermia':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Seek medical help if necessary.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Move the person to a warm place and remove wet clothing.</div>
          <div class="instruction-box2">Wrap in blankets or warm clothing, covering head and neck.</div>
          <div class="instruction-box3">Insulate from the cold ground and provide warm liquids if conscious.</div>
        </div>`;
    
    // Add more cases as needed for each emergency
    default:
      return null;
  }
}



function goBack() {
  window.history.back();
}

// Initialize the map and find nearby hospitals
function initMap() {
  // Check if the user's browser supports geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      const map = new google.maps.Map(document.getElementById('map'), {
        center: userLocation,
        zoom: 14
      });

      const service = new google.maps.places.PlacesService(map);

      const request = {
        location: userLocation,
        radius: '5000',
        type: ['hospital']
      };

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          const hospitalList = document.getElementById('hospitalList');
          hospitalList.innerHTML = "<h3>Nearest Hospitals:</h3><ul>";

          results.forEach(place => {
            createMarker(place);
            const distance = calculateDistance(userLocation, place.geometry.location);
            hospitalList.innerHTML += `<li>${place.name} - ${distance.toFixed(2)} km</li>`;
          });

          hospitalList.innerHTML += "</ul>";
        }
      });

      function createMarker(place) {
        const marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          const infoWindow = new google.maps.InfoWindow({
            content: place.name
          });
          infoWindow.open(map, marker);
        });
      }

      function calculateDistance(origin, destination) {
        const R = 6371; // Radius of the Earth in km
        const dLat = (destination.lat() - origin.lat) * Math.PI / 180;
        const dLng = (destination.lng() - origin.lng) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(origin.lat * Math.PI / 180) * Math.cos(destination.lat() * Math.PI / 180) *
                  Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
      }
    }, () => {
      handleLocationError(true, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, pos) {
  const errorMessage = browserHasGeolocation
    ? 'Error: The Geolocation service failed.'
    : 'Error: Your browser doesn\'t support geolocation.';
  console.error(errorMessage);
}
