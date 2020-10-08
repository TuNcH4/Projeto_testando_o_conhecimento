<script type="text/javascript">
    window.addEventListener('scroll', function (){
        
    var scroll =document.querySelector('.scrollTop');
    scroll.classList.toggle('active',window.scrollY > 500)
    })

    function scrollToTop(){
        window.scrollTop({
            top:0,
            behavior:'smooth'
        })
    }
</script>