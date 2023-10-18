import type { PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist";

const createPDFPage = (document: PDFDocumentProxy, page: number): Promise<PDFPageProxy> => {
  return new Promise((resolve, reject) => {
    if (!document || !page) return reject();
    document
      .getPage(page)
      .then((pageDocument: PDFPageProxy) => {
        resolve(pageDocument);
      })
      .catch((error: any) => reject(error));
  });
};

export default createPDFPage;
