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
    case 'severe allergic reaction (anaphylaxis)':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 immediately.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Help the person sit or lie down in a comfortable position.</div>
          <div class="instruction-box2">Assist them in using their epinephrine auto-injector (EpiPen) if they have one.</div>
          <div class="instruction-box3">Monitor the person's breathing and vital signs.</div>
          <div class="instruction-box4">Stay with the person until medical help arrives.</div>
        </div>`;
case 'asthma attack':
      return `
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Help the person sit upright and assist them in using their inhaler.</div>
          <div class="instruction-box2">Encourage slow, deep breaths.</div>
          <div class="instruction-box3">If symptoms worsen or they have difficulty breathing, call 999.</div>
          <div class="instruction-box4">Reassure the person and stay with them until help arrives.</div>
        </div>`;
case 'choking':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 if the person becomes unconscious.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Encourage the person to cough forcefully.</div>
          <div class="instruction-box2">If the person cannot speak, breathe, or cough, perform abdominal thrusts (Heimlich maneuver).</div>
          <div class="instruction-box3">If the person becomes unconscious, begin CPR.</div>
          <div class="instruction-box4">Continue providing assistance until medical help arrives.</div>
        </div>`;
case 'severe bleeding (hemorrhage)':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 if bleeding does not stop or is severe.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Remove any clothing or debris from the wound.</div>
          <div class="instruction-box2">Apply direct pressure to the wound using a clean cloth or bandage.</div>
          <div class="instruction-box3">Help the injured person lie down.</div>
          <div class="instruction-box4">Add more bandages as needed.</div>
          <div class="instruction-box5">Monitor the person's condition while waiting for medical help.</div>
        </div>`;
case 'head injury':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 if there is confusion, loss of consciousness, or vomiting.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Keep the person still and encourage them not to move.</div>
          <div class="instruction-box2">Apply a cold pack or cloth to the injured area to reduce swelling.</div>
          <div class="instruction-box3">Monitor the person's condition and seek medical help promptly.</div>
        </div>`;
case 'seizure':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 if the seizure lasts longer than five minutes.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Move them only if they're in danger.</div>
          <div class="instruction-box2">Cushion their head if they're on the ground.</div>
          <div class="instruction-box3">Loosen any tight clothing around their neck.</div>
          <div class="instruction-box4">Turn them on to their side after their convulsions stop.</div>
          <div class="instruction-box5">Stay with them and talk to them calmly until they recover.</div>
          <div class="instruction-box6">Note the time the seizure starts and finishes.</div>
        </div>`;
case 'shock (hypovolemic, septic, anaphylactic)':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 if there are signs of severe shock.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Lay the person flat and elevate their legs slightly if no spinal injury is suspected.</div>
          <div class="instruction-box2">Keep the person still, warm, and comfortable.</div>
          <div class="instruction-box3">Begin CPR if there are no signs of life.</div>
          <div class="instruction-box4">Loosen tight clothing and cover the person with a blanket to prevent chilling.</div>
          <div class="instruction-box5">Monitor the person's condition and provide reassurance.</div>
        </div>`;
case 'fractures (broken bones)':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 if the fracture involves the head, neck, or spine.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Remove clothing from the injured area.</div>
          <div class="instruction-box2">Do not attempt to move or reposition the injured limb.</div>
          <div class="instruction-box3">Immobilize the injured area using a splint or improvised materials.</div>
          <div class="instruction-box4">Apply a cold pack or cloth to reduce swelling and pain.</div>
          <div class="instruction-box5">Monitor the person's condition and seek medical help promptly.</div>
        </div>`;
case 'cardiac arrest':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 immediately.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Begin CPR immediately.</div>
          <div class="instruction-box2">Use an automated external defibrillator (AED) if available and follow the prompts.</div>
          <div class="instruction-box3">Continue CPR until medical help arrives.</div>
        </div>`;
case 'chest pain (angina)':
      return `
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Instruct the casualty to stop what they are doing and help them sit down.</div>
          <div class="instruction-box2">Try to reassure them and make them comfortable.</div>
          <div class="instruction-box3">If the person has been prescribed nitroglycerin and it is within reach, assist them in taking it.</div>
          <div class="instruction-box4">Monitor the person's condition and call 999 if symptoms worsen or persist.</div>
        </div>`;
case 'appendicitis':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 immediately.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Help the person lie down and keep them still.</div>
          <div class="instruction-box2">Do not give the person anything to eat or drink.</div>
          <div class="instruction-box3">Apply a cold pack or cloth to the area to help reduce pain.</div>
          <div class="instruction-box4">Monitor the person's condition and await medical help.</div>
        </div>`;
case 'acute abdominal pain':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 immediately.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Help the person lie down and keep them still.</div>
          <div class="instruction-box2">Place a hot water bottle or heated wheat bag on the abdomen.</div>
          <div class="instruction-box3">Soak in a warm bath.</div>
          <div class="instruction-box4">Drink plenty of clear fluids such as water.</div>
          <div class="instruction-box5">Reduce intake of coffee, tea, and alcohol.</div>
          <div class="instruction-box6">Monitor the person's condition and await medical help.</div>
        </div>`;
case 'spinal injury':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 immediately.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Keep the person still and do not move them unless absolutely necessary.</div>
          <div class="instruction-box2">Place heavy towels or rolled sheets on both sides of the neck or hold the head and neck to prevent movement.</div>
          <div class="instruction-box3">Avoid moving the head or neck.</div>
          <div class="instruction-box4">Reassure and keep the person calm if conscious.</div>
          <div class="instruction-box5">Be prepared to perform CPR if unconscious or not breathing.</div>
          <div class="instruction-box6">Do not attempt to straighten the person's body or move them without medical help.</div>
        </div>`;
case 'eye injury':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Seek medical help immediately.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Do not rub or apply pressure to the eye.</div>
          <div class="instruction-box2">Gently flush the eye with clean water if there is debris or chemical exposure.</div>
          <div class="instruction-box3">Cover the injured eye with a clean cloth or sterile dressing.</div>
        </div>`;
case 'electric shock':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Seek medical help immediately.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Do not touch the person if they are still in contact with the electrical source.</div>
          <div class="instruction-box2">Turn off the power source if possible or move the person away from the source using a non-conductive object.</div>
          <div class="instruction-box3">Check the person's breathing and pulse. Perform CPR if necessary.</div>
        </div>`;
case 'eclampsia (pregnancy-related hypertension)':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 immediately.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Help the person lie on their left side to improve blood flow to the heart.</div>
          <div class="instruction-box2">Loosen any tight clothing and keep the person cool.</div>
          <div class="instruction-box3">Do not give the person anything to eat or drink.</div>
          <div class="instruction-box4">Monitor the person's condition and await medical help.</div>
        </div>`;
case 'pneumothorax (collapsed lung)':
      return `
        <div class="alert alert-danger">
          <i class="fas fa-phone-alt"></i> <strong>Emergency!</strong> Call 999 immediately.
        </div>
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Help the person sit in a comfortable position, leaning slightly forward.</div>
          <div class="instruction-box2">Encourage shallow breathing to minimize discomfort.</div>
          <div class="instruction-box3">Do not attempt to remove or cover the injury site.</div>
          <div class="instruction-box4">Monitor the person's condition and await medical help.</div>
        </div>`;
case 'fainting (syncope)':
      return `
        <div class="alert alert-info">
          <i class="fas fa-info-circle"></i> <h5>Steps to take:</h5>
          <div class="instruction-box1">Lay the person flat on their back and raise their legs above the level of their heart.</div>
          <div class="instruction-box2">Prop up the person's legs about 12 inches (30 centimeters).</div>
          <div class="instruction-box3">Loosen any tight clothing around their neck and chest.</div>
          <div class="instruction-box4">Don't get the person up too fast to reduce the chance of fainting again.</div>
          <div class="instruction-box5">Check their breathing and pulse. Perform CPR if necessary.</div>
          <div class="instruction-box6">If the person does not regain consciousness within a minute or two, seek medical help.</div>
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
