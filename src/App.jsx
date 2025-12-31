import { useState, useEffect } from "react";
import Card from "./components/Card";

const isValidEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net|edu|gov|co|io)$/.test(
    email.toLowerCase()
  );

const isValidPhone = (num) => /^\d{10}$/.test(num);

const isValidUrl = (url) => {
  if (!url) return true;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const App = () => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");

  const [allUsers, setAllUsers] = useState(() => {
    try {
      const stored = localStorage.getItem("contacts");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(allUsers));
  }, [allUsers]);

  const isFormValid =
    name.trim() &&
    imgUrl.trim() &&
    num.trim() &&
    email.trim() &&
    isValidEmail(email) &&
    isValidPhone(num) &&
    isValidUrl(imgUrl);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !num || !email) {
      setError("Name, mobile number and email are required");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Enter a valid email address");
      return;
    }

    if (!isValidPhone(num)) {
      setError("Mobile number must be 10 digits");
      return;
    }

    if (!isValidUrl(imgUrl)) {
      setError("Invalid image URL");
      return;
    }

    const isDuplicate = allUsers.some((user) => user.num === num.trim());

    if (isDuplicate) {
      setError("This mobile number already exists");
      return;
    }

    setError("");
    setIsSubmitting(true);

    setAllUsers((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: name.trim(),
        imgUrl: imgUrl.trim(),
        num: num.trim(),
        email: email.trim(),
      },
    ]);

    setName("");
    setImgUrl("");
    setNum("");
    setEmail("");
    setIsSubmitting(false);
  }

  function deletehandler(id) {
    setAllUsers((prev) => prev.filter((user) => user.id !== id));
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col">
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "2rem",
          paddingLeft: isMobile ? "1rem" : "5rem",
          paddingRight: isMobile ? "1rem" : "2rem",
        }}
        className="flex flex-wrap gap-4"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ padding: "1rem", width: isMobile ? "100%" : "45%" }}
          className="h-15 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:bg-black"
        />

        <input
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          placeholder="Enter profile image URL"
          style={{ padding: "1rem", width: isMobile ? "100%" : "45%" }}
          className="h-15 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:bg-black"
        />

        <input
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="Mobile Number"
          style={{ padding: "1rem", width: isMobile ? "100%" : "45%" }}
          className="h-15 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:bg-black"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email Address"
          style={{ padding: "1rem", width: isMobile ? "100%" : "45%" }}
          className="h-15 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:bg-black"
        />

        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          style={{ width: isMobile ? "100%" : "91%" }}
          className={`h-10 bg-amber-400 rounded-2xl font-medium text-xl transition
            ${
              !isFormValid || isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 cursor-pointer active:scale-96"
            }`}
        >
          {isFormValid ? "Add to Contact" : "Adding..."}
        </button>
      </form>

      {error && (
        <p
          style={{
            paddingLeft: isMobile ? "1rem" : "5rem",
            paddingRight: isMobile ? "1rem" : "2rem",
            marginTop: "-0.5rem",
          }}
          className="text-red-400 text-sm"
        >
          {error}
        </p>
      )}

      <div
        style={{ padding: "2rem" }}
        className={`flex flex-wrap gap-2 ${
          isMobile ? "justify-center" : "justify-start"
        }`}
      >
        {allUsers.map((user) => (
          <div
            key={user.id}
            style={{
              padding: "1rem",
              width: isMobile ? "100%" : "260px",
            }}
            className="bg-emerald-700 rounded-lg flex flex-col items-center gap-1 relative shadow-sm shadow-emerald-50
"
          >
            <Card user={user} deletehandler={deletehandler} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
