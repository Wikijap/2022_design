if (typeof window !== 'undefined' && window instanceof Window) {
    setTimeout(() => document.body.classList.add('loaded'), 1000);

    window.addEventListener('load', function () {
        var header: HTMLElement | null;

        if (header = this.document.querySelector('header')) {
            const hdrSearchBox: HTMLDivElement | null = header.querySelector('.search');
            const hdrSearchInput: HTMLInputElement | null = header.querySelector('.search .search-box input');

            if (hdrSearchBox && hdrSearchInput) {
                const updateHSearch = () => hdrSearchBox.classList[hdrSearchInput.value ? 'add' : 'remove']('content');

                hdrSearchInput.addEventListener('focusin', () => (
                    hdrSearchBox.classList.add('active'), updateHSearch()
                ));

                hdrSearchInput.addEventListener('focusout', () =>
                    hdrSearchBox.classList.remove('active', 'content')
                );

                hdrSearchInput.onkeydown = updateHSearch;
                hdrSearchInput.onkeyup = updateHSearch;
            }
        }
    });
}
