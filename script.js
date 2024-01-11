function calculateAge() {
  const dateOfBirth = document.getElementById("date-of-birth").value;
  const givenDate = document.getElementById("given-date").value;

  let startDate = new Date(dateOfBirth);
  let endDate = new Date(givenDate);

  let setDobYear = startDate.getFullYear();
  let setDobMonth = startDate.getMonth() + 1;
  let setDobDay = startDate.getDate();

  let givenYear = endDate.getFullYear();
  let givenMonth = endDate.getMonth() + 1;
  let givenDay = endDate.getDate();

  if (
    setDobYear > givenYear ||
    (setDobMonth > givenMonth && setDobYear === givenYear) ||
    (setDobDay > givenDay &&
      setDobMonth === givenMonth &&
      setDobYear === givenYear)
  ) {
    alert("Not Born Yet !");
    return;
  }

  let yearDiff = givenYear - setDobYear;
  let monthDiff;

  if (givenMonth >= setDobMonth) {
    monthDiff = givenMonth - setDobMonth;
  } else {
    yearDiff--;
    monthDiff = 12 + givenMonth - setDobMonth;
  }

  if (givenDay >= setDobDay) {
    daysDiff = givenDay - setDobDay;
  } else {
    monthDiff--;
    let days = month[givenMonth - 2];
    daysDiff = days + givenDay - setDobDay;
    if (monthDiff < 0) {
      monthDiff = 11;
      yearDiff--;
    }
  }

  showResult(yearDiff, monthDiff, daysDiff);
}

const showResult = (totalYears, totalMonths, totalDays) => {
  document.getElementById("years").textContent = `${totalYears} Year(s)`;
  document.getElementById("months").textContent = `${totalMonths} Month(s)`;
  document.getElementById("days").textContent = `${totalDays} Day(s)`;
  document.getElementById("output-box").style.display = "flex";
  document.getElementById("msg").style.display = "block";
}
