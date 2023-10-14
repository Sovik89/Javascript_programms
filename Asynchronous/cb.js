let dataArr = [
    {
      name: "Shashwat",
      age: 26
    },
    {
      name: "Naman",
      age: 25
    }
  ]; // Dummy Response
  
  
  function getData() {
    setTimeout(()=> {
      let output = '';
      dataArr.forEach(function(data) {
        output += `<li>${data.name}</li>`;
      })
      document.body.innerHTML = output;
    });
  }
  
  function createData(newData, cb) {
    setTimeout(()=> {
      dataArr.push(newData);
      cb();
    }, 3000);
  }
  
  getData();
  createData({ name: "Mrinal", age: 25 }, getData);