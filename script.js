const members = [
  { name: "Niño Meltan", role: "Engineering", initials: "RR", tasks: 8, cap: 10, status: "Active" },
  { name: "Bianca Forteza", role: "Design", initials: "CM", tasks: 5, cap: 8, status: "Active" },
  { name: "James Salutatorian", role: "Engineering", initials: "MS", tasks: 9, cap: 10, status: "Heavy load" },
  { name: "Bea Villafuerte", role: "QA", initials: "BV", tasks: 3, cap: 8, status: "Available" },
  { name: "Karlo Ibanez", role: "Design", initials: "KI", tasks: 6, cap: 8, status: "Active" },
  { name: "Diane Cortez", role: "Engineering", initials: "DC", tasks: 2, cap: 10, status: "Available" },
  { name: "Josh Del Mundo", role: "QA", initials: "JD", tasks: 7, cap: 8, status: "Active" },
  { name: "Alyssa Fajardo", role: "Engineering", initials: "AF", tasks: 4, cap: 10, status: "Available" }
];

let currentRole = "all";
const searchInput = document.getElementById("searchInput");
const grid = document.getElementById("cardGrid");

function render() {
  const query = searchInput.value.toLowerCase();
  const visible = members
    .filter(m => currentRole === "all" || m.role.toLowerCase() === currentRole)
    .filter(m => m.name.toLowerCase().includes(query));

  if (visible.length === 0) {
    grid.innerHTML = `<p class="empty-state">No team members match "${query}". Try a different name.</p>`;
    return;
  }

  grid.innerHTML = visible.map(m => {
    const pct = Math.round((m.tasks / m.cap) * 100);
    return `
      <div class="card">
        <div class="top">
          <div class="avatar" aria-hidden="true">${m.initials}</div>
          <div>
            <div class="name">${m.name}</div>
            <div class="role">${m.role}</div>
          </div>
        </div>
        <div class="status">${m.status} · ${m.tasks}/${m.cap} tasks</div>
        <div class="bar-track" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="${m.name} workload">
          <div class="bar-fill" style="width:${pct}%"></div>
        </div>
      </div>`;
  }).join("");
}

searchInput.addEventListener("input", render);

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    currentRole = chip.dataset.role;
    document.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", "false"));
    chip.setAttribute("aria-pressed", "true");
    render();
  });
});

render();