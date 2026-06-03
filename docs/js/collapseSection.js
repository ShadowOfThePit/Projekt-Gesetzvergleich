function collapse(btn) {
    const MINUS_SIGN = "−";
    const wrapper = btn.parentElement;
    const content = wrapper.nextElementSibling;

    const isCollapsed = content.classList.toggle("is-collapsed");
    btn.textContent = isCollapsed ? "+" : MINUS_SIGN;
}
