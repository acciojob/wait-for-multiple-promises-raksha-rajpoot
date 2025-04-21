//your JS code here. If required.
 const output = document.getElementById('output');

  function createPromise(index) {
    const delay = Math.random() * 2 + 1; 
    const start = performance.now();

    return new Promise(resolve => {
      setTimeout(() => {
        const end = performance.now();
        const timeTaken = ((end - start) / 1000).toFixed(3);
        resolve({ label: `Promise ${index}`, time: parseFloat(timeTaken) });
      }, delay * 1000);
    });
  }

  const startTime = performance.now();

  Promise.all([
    createPromise(1),
    createPromise(2),
    createPromise(3)
  ]).then(results => {
    const endTime = performance.now();
    const totalTime = ((endTime - startTime) / 1000).toFixed(3);

    output.innerHTML = '';

    results.forEach(result => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${result.label}</td><td>${result.time.toFixed(3)}</td>`;
      output.appendChild(row);
    });

   const maxTime = Math.max(...results.map(r => r.time)).toFixed(3);
    totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${maxTime}</strong></td>`;
    output.appendChild(totalRow);
  });