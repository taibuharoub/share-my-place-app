export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById("modal-template");
  }

  show() {
    //   checks for Template tag support
    if ("content" in document.createElement("template")) {
      const modalElements = document.importNode(
        this.modalTemplateEl.content,
        true
      );
      this.modelElement = modalElements.querySelector(".modal");
      this.backdropElement = modalElements.querySelector(".backdrop");
      const contentElement = document.importNode(
        this.contentTemplateEl.content,
        true
      );

      this.modelElement.appendChild(contentElement);

      document.body.insertAdjacentElement("afterbegin", this.modelElement);
      document.body.insertAdjacentElement("afterbegin", this.backdropElement);
    } else {
      //fallback code
      alert(this.fallbackText);
    }
  }

  hide () {
      if (this.modelElement) {
          document.body.removeChild(this.modelElement) //this.modelElement.remove()
          document.body.removeChild(this.backdropElement)
          this.modelElement = null;
          this.backdropElement = null;
      }
  }
}
