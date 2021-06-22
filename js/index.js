visibleNow = "about"
makeVisible = (id) => {
    if (id === visibleNow) {
        return
    }
    // Remove the hidden from the div that displays data
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(visibleNow).classList.add('hidden');

    // update highlight text
    document.getElementById(id+"-head").classList.add('text-blue-600');
    document.getElementById(visibleNow+"-head").classList.remove('text-blue-600');

    // Update the name of the div that is visible now
    visibleNow = id;
}