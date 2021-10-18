var image = document.getElementById('flag-img');

var styles = window.getComputedStyle(image);

function checkForChanges()
{
    if (styles.getPropertyValue('filter') != 'blur(10px)' && image.src != 'realflag.jpg')
    {
        image.src = 'images/realflag.jpg';
    }
    else if (image.src != 'images/flag.png')
    {
        image.src = 'images/flag.png';
    }

    setTimeout(checkForChanges, 500);
}

checkForChanges();

