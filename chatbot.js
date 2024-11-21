document.getElementById("sendButton").addEventListener("click", sendMessage);

const personalDetails = {
  name: "My name Y.SreekanthReddy.",
  phone: "9398075151",
  father:"papireddy",
  mother:"lakshmiDevi",
  edutantr:"2 Months Machine Learning Internship (Offline at Banglore)",
  pragyashal:"2 Months AI&ML Internship (Online)",
  internships:"EduTantr,Pragyashal (2 Internships)",
  certificates:"TCS ION Certification, MicrosoftAzure Certifications, Infosys Certifications, Coursera Certifications, NPTEL Certifications, Cisco Certifications ",
  college: "Madanapalle Institute of Technology & Science.",
  address: "Peddapalli , Garrugupalle , Galiveedu-516267.",
  education: "Btech Computer Science and Engineering Artificial Intelligence.",
  goal: "My goal is to reach a top position.",
  hobbies: "meditation,Playing Cricket,Reading Books and programming.",
  inspiration: "My inspiration is my Brother.",
  default: "I'm not sure about that. Could you ask something else?",
};

function sendMessage() {
  const userMessage = document.getElementById("userMessage").value.trim();
  if (userMessage === "") return;

  addMessage(userMessage, "user-message");
  document.getElementById("userMessage").value = "";

  const botResponse = getBotReply(userMessage.toLowerCase());
  setTimeout(() => addMessage(botResponse, "bot-message"), 500);
}

function addMessage(text, className) {
  const messagesDiv = document.getElementById("messages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${className}`;
  messageDiv.textContent = text;
  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function getBotReply(userMessage) {
  if (userMessage.includes("name")) return personalDetails.name;
  if (userMessage.includes("internships")) return personalDetails.internships;
  if (userMessage.includes("phone")) return personalDetails.phone;
  if (userMessage.includes("father")) return personalDetails.father;
  if (userMessage.includes("mother")) return personalDetails.mother;
  if (userMessage.includes("certificates")) return personalDetails.certificates;
  if (userMessage.includes("edutantr")) return personalDetails.edutantr;
  if (userMessage.includes("college")) return personalDetails.college;
  if (userMessage.includes("address")) return personalDetails.address;
  if (userMessage.includes("education")) return personalDetails.career;
  if (userMessage.includes("goal")) return personalDetails.goal;
  if (userMessage.includes("hobby") || userMessage.includes("hobbies")) return personalDetails.hobbies;
  if (userMessage.includes("inspiration") || userMessage.includes("inspire")) return personalDetails.inspiration;
  return personalDetails.default;
}
