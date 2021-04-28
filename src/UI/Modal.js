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
      const modelElement = modalElements.querySelector(".modal");
      const backdropElement = modalElements.querySelector(".backdrop");
      const contentElement = document.importNode(
        this.contentTemplateEl.content,
        true
      );

      modelElement.appendChild(contentElement);

      document.body.insertAdjacentElement("afterbegin", modelElement);
      document.body.insertAdjacentElement("afterbegin", backdropElement);
    } else {
      //fallback code
      alert(this.fallbackText);
    }
  }

  hide () {}
}
