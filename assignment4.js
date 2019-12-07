var buttons=document.getElementsByClassName('button');

for(i=0;i<buttons.length;i++)
{
  buttons[i].classList.add('button_style');
}

for(i=0;i<buttons.length;i++)
{
  buttons[i].addEventListener('mouseenter',function()
  {
    this.classList.add('animation');
  });

  buttons[i].addEventListener('mouseleave',function()
  {
    this.classList.remove('animation');
    var div= document.getElementById('exclamation')
    div.style.display='none';
  });

  buttons[i].addEventListener('click',showBox);
}

function showBox()
{
  var div = document.getElementById('exclamation')
  div.style.display='block';
}
