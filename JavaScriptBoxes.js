//toggles collapsible elements

var coll = document.getElementsByClassName("collapsible");

Array.from(coll).forEach(button => {
    button.addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        var isExpanded = this.classList.contains("active");
        content.style.maxHeight = isExpanded ? content.scrollHeight + "px" : null;
        this.setAttribute("aria-expanded", isExpanded);
    });
});