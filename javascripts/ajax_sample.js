let number = 0;
  const button = $("#btn");
  const videoArea = $("#video");
  const titleArea = $("#title");
  const contentArea = $("#content");

  function getData() {
    return $.ajax('ajax.json',{  //--3
      type: 'GET',
    })
  };

  function changeVideo() {
    button.click(function(){
      getData().then(function(data){ //--4
        videoArea.attr('src',data[number].url);
        titleArea.html(data[number].title);
        contentArea.html(data[number].content);
        number == 2 ? number = 0 : number++
      })
    });
  }

  window.onload = changeVideo;