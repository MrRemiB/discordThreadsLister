// Main threads object
var threads={};
// On each mouse scroll
document.onmousewheel = function(){
  // If channel entry does not exist...
if (!Object.keys(threads).includes(document.title.split('|')[1].trim())) {
    threads[document.title.split('|')[1].trim()] = [];
}

    // List all threads
    document.querySelectorAll('[class*="threadName-"]').forEach(function(u, i){
    // Put the thread in the channel array
     !threads[document.title.split('|')[1].trim()].includes(u.textContent) ? threads[document.title.split('|')[1].trim()].push(u.textContent) : '';
    // Test de commentaire

        
})
}
