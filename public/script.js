function websiteVisits(res) {
    
    localStorage.setItem("value", res.value);
    console.log(res.value)
    return res.value;
  }