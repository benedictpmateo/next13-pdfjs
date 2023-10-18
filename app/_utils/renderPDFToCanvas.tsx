import { PDFPageProxy } from "pdfjs-dist";

const renderPDFToCanvas = (
  pageDocument: PDFPageProxy,
  canvas: HTMLCanvasElement
): Promise<HTMLCanvasElement> => {
  return new Promise((resolve, reject) => {
    pageDocument
      .render({
        canvasContext: canvas.getContext("2d") as CanvasRenderingContext2D,
        viewport: pageDocument.getViewport({ scale: 1 }),
      })
      .promise.then(function () {
        resolve(canvas);
      });
  });
};

export default renderPDFToCanvas;
