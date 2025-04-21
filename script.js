//your JS code here. If required.
const output = document.getElementById('output');

output.innerHTML = `<tr id="loading"><td colspan="2">Loading...</td></tr>`;

function createPromise(index) {
  const delay = Math.random() * 2 + 1; // 1 to 3 seconds
  const start = performance.now();

  return new Promise(resolve => {
    setTimeout(() => {
      const end = performance.now();
      const timeTaken = (end - start) / 1000;
      resolve({ label: `Promise ${index}`, time: timeTaken });
    }, delay * 1000);
  });
}

const promises = [createPromise(1), createPromise(2), createPromise(3)];

Promise.all(promises).then(results => {
  const loadingRow = document.getElementById('loading');
  if (loadingRow) loadingRow.remove();

  results.forEach(result => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${result.label}</td>
      <td>${result.time.toFixed(3)}</td>
    `;
    output.appendChild(row);
  });

  const maxTime = Math.max(...results.map(r => r.time)).toFixed(3);
  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${maxTime}</strong></td>
  `;
  output.appendChild(totalRow);
});
