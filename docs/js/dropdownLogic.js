document.addEventListener('DOMContentLoaded', () => {
    const leftSelect = document.getElementById('leftSelect');
    const rightSelect = document.getElementById('rightSelect');
    const viewSelect = document.getElementById('viewSelect');

    const changeDocSubmitter = document.getElementById('submit-doc-change');
    const changeComparisonSubmitter = document.getElementById('submit-comparison-change');

    // If none of the relevant controls are present, nothing to do
    if (!leftSelect || !rightSelect || !viewSelect || !viewSelect || !changeDocSubmitter || !changeComparisonSubmitter) return;

    function getPath() {
        return window.location.pathname.split("/").filter(Boolean);
    }

    function changeDoc() {
        const viewDate = viewSelect.value;
        const currentPath = getPath();
        changeDocSubmitter.href = `/${currentPath[0]}/${currentPath[1]}/${viewDate}/`;
    }

    // Called whenever a new date is selected in the comparer dropdown
    function updateDropdown() {
        const leftDate = leftSelect.value;
        const rightDate = rightSelect.value;

        //  Disable the selected date in the other dropdown
        for (const leftOpt of leftSelect.options)
            leftOpt.disabled = (leftOpt.value === rightDate);
        for (const rightOpt of rightSelect.options)
            rightOpt.disabled = (rightOpt.value === leftDate);


        const currentPath = getPath();
        // Set redirect value of submit button
        changeComparisonSubmitter.href = `/${currentPath[0]}/${currentPath[1]}/${leftDate}/${rightDate}/`;
    }

    changeDoc();
    updateDropdown(); // Call once at start...

    viewSelect.addEventListener('change', changeDoc);
    leftSelect.addEventListener('change', updateDropdown);
    rightSelect.addEventListener('change', updateDropdown);
});
