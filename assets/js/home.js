window.addEventListener('load', function () {
    const caroussel = document.querySelector('div.caroussel');

    const carret = caroussel.querySelectorAll('.carret');
    const indexDisplay = caroussel.querySelector('.index');
    const content = caroussel.querySelector('.content');
    const articles = content.querySelectorAll('article');

    const min = 0, max = articles.length;

    var index = 0, scrollInterval;

    // init index on top of caroussel
    indexDisplay.innerHTML = "";
    articles.forEach(() => indexDisplay.append(this.document.createElement('span')));

    // update
    function updateArticles (step) {
        const changeContent = () => {
            content.querySelectorAll('article').forEach(a => (a.classList.remove('animate'), a.remove()));
            content.append(
                articles.item((index - 1 < 0 ? max : index) - 1),
                articles.item(index),
                articles.item(index + 1 >= max ? 0 : index + 1)
            );
            content.scroll({ left: content.clientWidth });
            articles[index].classList.add('animate');
        };

        // have to scroll
        if (Math.abs(step)) {
            content.scroll({ left: content.clientWidth * (1 + step), behavior: 'smooth' });
            setTimeout(changeContent, 550);
        } else changeContent();

        // Toggle index
        indexDisplay.querySelectorAll('span').forEach((a, i) => a.classList[i === index ? 'add' : 'remove']('current'));

        // Set "auto-scroll"
        scrollInterval = this.setInterval(() => carret?.[1].click(), 6e3)
    };

    // carret functions
    carret.forEach(a => a.onclick = () => {
        this.clearInterval(scrollInterval);

        let initialIndex = index; index += a.classList.contains('left')*-2+1;

        if (index < min) {
            index = max - 1, initialIndex = max; 
        } else if (index >= max) {
            index = min, initialIndex = -1;
        }

        updateArticles(index - initialIndex);
    });

    // update on start
    updateArticles(0);
});
