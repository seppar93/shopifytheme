// Put your application javascript here
if(document.getElementById('sort_by') !== null){

    document.querySelector('#sort_by').addEventListener('change', (event) => {
        
        let url = new URL (window.location.href)
        url.searchParams.set('sort_by', event.currentTarget.value)
        
        window.location = url.href;
    })
}