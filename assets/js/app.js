if (typeof window !== 'undefined' && window instanceof Window) {
    window.addEventListener('load', function () {
        var header;
        if (header = this.document.querySelector('header')) {
            var hdrSearchBox_1 = header.querySelector('.search');
            var hdrSearchInput_1 = header.querySelector('.search .search-box input');
            if (hdrSearchBox_1 && hdrSearchInput_1) {
                var updateHSearch_1 = function () { return hdrSearchBox_1.classList[hdrSearchInput_1.value ? 'add' : 'remove']('content'); };
                hdrSearchInput_1.addEventListener('focusin', function () { return (hdrSearchBox_1.classList.add('active'), updateHSearch_1()); });
                hdrSearchInput_1.addEventListener('focusout', function () {
                    return hdrSearchBox_1.classList.remove('active', 'content');
                });
                hdrSearchInput_1.onkeydown = updateHSearch_1;
                hdrSearchInput_1.onkeyup = updateHSearch_1;
            }
        }
    });
}
