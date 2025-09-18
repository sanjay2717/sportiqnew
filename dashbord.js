// Require login first
requireLogin();
const user = getUser();

// Set greeting
document.getElementById("username").textContent = user.name || user.username;
document.getElementById("roleTag").textContent = `🎭 Your Role: ${user.role}`;

// ===== Role Themes (per role accent colors & banners) =====
const roleThemes = {
  "Player": {
    color: "#2563eb", // blue
    badge: "🎽 Player Dashboard"
  },
  "Coach": {
    color: "#16a34a", // green
    badge: "🧑‍🏫 Coach Dashboard"
  },
  "Organizer": {
    color: "#f97316", // orange
    badge: "🎪 Organizer Dashboard"
  },
  "Admin": {
    color: "#dc2626", // red
    badge: "🔑 Admin Control Panel"
  },
  "District Official": {
    color: "#9333ea", // purple
    badge: "🏢 District Official Dashboard"
  }
};

// ===== Dashboard card definitions =====
const dashboards = {
  "Player": [
    { icon: "kbtmbyzy", label: "Tournament", link: "tournament.html" },
    { icon: "dxjqoygy", label: "My Profile", link: "profile.html" },
    { icon: "uqpazftn", label: "Achievements", link: "#" },
    { icon: "vusrdugn", label: "My Sport", link: "#" }
  ],
  "Coach": [
    { icon: "hkkvwurz", label: "View Players", link: "#" },
    { icon: "wkmgilbt", label: "Verify Achievements", link: "#" },
    { icon: "oybdpbgm", label: "Schedules", link: "#" },
    { icon: "yqzmiobz", label: "Reports", link: "#" }
  ],
  "Organizer": [
    { icon: "pithnlch", label: "Create Tournament", link: "#" },
    { icon: "hjeefwhm", label: "Manage Registrations", link: "#" },
    { icon: "oqaqqdrh", label: "Upload Results", link: "#" },
    { icon: "xhdhjyqy", label: "Communication", link: "#" }
  ],
  "Admin": [
    { icon: "qghumhdz", label: "Create Tournament / Event", link: "#"},
    { icon: "ajkxzzfb", label: "Manage Registrations", link: "#"},
    { icon: "qvyppzqz", label: "Upload Results & Certificates", link: "#"},
    { icon: "megaphone", label: "Announcement", link: "#"}
  ],
  "District Official": [
    { icon: "qjwprgca", label: "Approve Events", link: "#" },
    { icon: "fnkgdaia", label: "Scout Players", link: "#" },
    { icon: "bxxnzkuh", label: "Statistics", link: "#" },
    { icon: "gpvmjssr", label: "Policy Data", link: "#" }
  ]
};

// ===== Apply Theme =====
const role = roleThemes[user.role];
if(role) {
  // Logout button & badge colored dynamically
  const logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.style.background = role.color;
  logoutBtn.style.border = `1px solid ${role.color}`;

  if(role.badge){
    const banner = document.getElementById("banner");
    banner.textContent = role.badge;
    banner.style.display = "inline-block";
    banner.style.background = role.color;
  }
}

// ===== Render Cards =====
const roleCards = document.getElementById("roleCards");
const roleDashboard = dashboards[user.role] || [];

roleDashboard.forEach(card => {
  const el = document.createElement("a");
  el.href = card.link;
  el.className = "card-box";

  // use Lordicon + theme color as secondary accent
  const color = role ? role.color : "#2563eb";
  el.innerHTML = `
    <lord-icon src="https://cdn.lordicon.com/${card.icon}.json"
               trigger="hover" colors="primary:#111,secondary:${color}"
               style="width:70px;height:70px">
    </lord-icon>
    <h3>${card.label}</h3>`;
  roleCards.appendChild(el);
});