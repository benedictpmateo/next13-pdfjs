"use client";

import { useEffect, useRef } from "react";
import getPDFDocument from "../_utils/getPDFDocument";
import createPDFPage from "../_utils/createPDFPage";
import renderPDFToCanvas from "../_utils/renderPDFToCanvas";

export const PDFCanvas = () => {
  const ref = useRef<HTMLDivElement>(null);

  const renderPDF = async () => {
    const url = window.location.origin + "/dummy.pdf";
    const pageNumber = 1;
    const pdfDocument = await getPDFDocument(url);
    const pdfPage = await createPDFPage(pdfDocument, pageNumber);
    const viewport = pdfPage.getViewport({ scale: 1 });
    const { height, width } = viewport;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const pdfCanvas = await renderPDFToCanvas(pdfPage, canvas);
    ref.current?.replaceChildren(pdfCanvas)
  };

  useEffect(() => {
    renderPDF();
  }, []);

  return <div ref={ref}>1</div>;
};
