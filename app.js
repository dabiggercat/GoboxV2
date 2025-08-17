<script type="module">
  // imports
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

  // config
  const firebaseConfig = {
    apiKey: "AIzaSyCuJwwNCvXQ0Swe4Mo5rVLv1aRQzmQwfe8",
    authDomain: "gobox-17421.firebaseapp.com",
    projectId: "gobox-17421",
    storageBucket: "gobox-17421.firebasestorage.app",
    messagingSenderId: "201898100467",
    appId: "1:201898100467:web:6f84e6719f678a5dbe1986",
    measurementId: "G-83Y26S09S8"
  };

  // start firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // form handler
  document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    let username = document.getElementById("username").value;

    if (username.trim() === "") {
      alert("enter a name bro");
      return;
    }

    try {
      // save user in firestore
      await setDoc(doc(db, "users", username), {
        name: username,
        joinedAt: new Date()
      });

      // redirect to homepage n send name
      window.location.href = "home.html?user=" + encodeURIComponent(username);
    } catch (err) {
      console.error("error adding user: ", err);
    }
  });
</script>
