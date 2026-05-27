function collapseSection(btn) {
    const MINUS_SIGN = "−";
    const wrapper = btn.parentElement;
    const content = wrapper.nextElementSibling;

    if (!content?.classList.contains("collapse-content")) return;

    const isCollapsed = content.classList.toggle("is-collapsed");
    btn.textContent = isCollapsed ? "+" : MINUS_SIGN;
}
