function calculateSWP() {
    // Fetching input values
    let investmentAmount = parseFloat(document.getElementById("investmentAmount").value);
    let withdrawalAmount = parseFloat(document.getElementById("withdrawalAmount").value);
    let investmentPeriod = parseInt(document.getElementById("investmentPeriod").value);
    let annualInterestRate = parseFloat(document.getElementById("annualInterestRate").value);

    // Calculations
    let totalMonths = investmentPeriod * 12;
    let monthlyInterestRate = annualInterestRate / 12 / 100;
    let result = "";

    // SWP Simulation
    result += "<h2>SWP Simulation</h2>";
    result += "<table>";
    result += "<tr><th>Month</th><th>Balance</th><th>Interest</th><th>Withdrawal</th><th>New Balance</th></tr>";
    let balance = investmentAmount;
    for (let month = 1; month <= totalMonths; month++) {
        let interestEarned = balance * monthlyInterestRate;
        balance += interestEarned;
        balance -= withdrawalAmount; // Withdrawal every month

        result += `<tr><td>${month}</td><td>${balance.toFixed(2)}</td><td>${interestEarned.toFixed(2)}</td><td>${withdrawalAmount.toFixed(2)}</td><td>${balance.toFixed(2)}</td></tr>`;
    }
    result += "</table>";

    document.getElementById("resultSWP").innerHTML = result;
}


function calculateEMI() 
{
            let loanAmount = parseFloat(document.getElementById("loanAmount").value);
            let interestRate = parseFloat(document.getElementById("interestRate").value);
            let tenure = parseInt(document.getElementById("tenure").value);

            let monthlyInterestRate = interestRate / 12 / 100;
            let totalMonths = tenure * 12;

            let emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
            let totalRepayment = emi * totalMonths;

            let result = `<h2>Loan Details</h2>
                          <p><strong>Loan Amount:</strong> $${loanAmount.toFixed(2)}</p>
                          <p><strong>Interest Rate:</strong> ${interestRate}%</p>
                          <p><strong>Tenure:</strong> ${tenure} years</p>
                          <h2>EMI Details</h2>
                          <p><strong>EMI:</strong> $${emi.toFixed(2)}</p>
                          <p><strong>Total Repayment Amount:</strong> $${totalRepayment.toFixed(2)}</p>`;

            document.getElementById("result").innerHTML = result;
         }