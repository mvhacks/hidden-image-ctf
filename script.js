var image = document.getElementById('flag-img');

var styles = window.getComputedStyle(image);

function checkForChanges()
{
    if (styles.getPropertyValue('position') != 'absolute' && styles.getPropertyValue('opacity') != '0' && styles.getPropertyValue('z-index') != '0' && styles.getPropertyValue('filter') != 'blur(20px)' && image.src != 'realflag.jpeg')
    {
        image.src = 'images/realflag.jpeg';
    }
    else if (image.src != 'images/flag.jpg')
    {
        image.src = 'images/flag.jpg';
    }

    setTimeout(checkForChanges, 500);
}

checkForChanges();

