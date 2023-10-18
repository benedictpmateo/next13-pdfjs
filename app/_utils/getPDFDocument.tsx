import { PDFDocumentProxy } from 'pdfjs-dist';

const getPDFDocument = async (path: string): Promise<PDFDocumentProxy> => {
  const pdfJS = await import('pdfjs-dist')
  
  pdfJS.GlobalWorkerOptions.workerSrc =
    window.location.origin + "/pdf.worker.min.js";

  return new Promise((resolve, reject) => {
    pdfJS
      .getDocument(path)
      .promise.then((pdfDocument: PDFDocumentProxy) => {
        resolve(pdfDocument);
      })
      .catch(reject);
  });
};

export default getPDFDocument