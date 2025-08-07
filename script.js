
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function calculateEMI() {
  let P = parseFloat(document.getElementById('loanAmount').value);
  let R = parseFloat(document.getElementById('interestRate').value) / 12 / 100;
  let N = parseFloat(document.getElementById('loanTenure').value);

  if (!P || !R || !N) {
    alert("Please fill all fields");
    return;
  }

  let emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  document.getElementById('emiResult').innerHTML = "Monthly EMI: ₹" + emi.toFixed(2);
}
