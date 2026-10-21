const colour = document.getElementById('colour');
const shirt = document.getElementById('shirt');
const status = document.getElementById('status');
const labels = {'#2563eb':'blue','#dc2626':'red','#16a34a':'green','#111827':'black'};
colour.addEventListener('change', () => {
  shirt.style.backgroundColor = colour.value;
  status.textContent = 'Showing ' + labels[colour.value] + ' garment';
});
