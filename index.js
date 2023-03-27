//K3n5c0d3!

function addingEventListener() {
        const input = document.getElementById('input');

        function clickAlert() {
                alert('I was clicked!');
            }
        input.addEventListener('click', clickAlert);
    }