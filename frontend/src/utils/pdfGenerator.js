import { jsPDF } from 'jspdf';

/**
 * Generates a formal SATS Solutions Whitepaper PDF.
 * @param {string} title - The title of the paper.
 */
export const generateDetailedPDF = (title) => {
  const doc = new jsPDF();
  let y = 30;

  const addText = (text, size = 12, style = "normal", color = [0, 0, 0]) => {
    doc.setFont("times", style);
    doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);
    const lines = doc.splitTextToSize(text, 170);
    doc.text(lines, 20, y);
    y += (lines.length * (size * 0.5)) + 8;
  };

  // PAGE 1: TITLE & EXECUTIVE SUMMARY
  doc.setFont("times", "bold");
  doc.setFontSize(26);
  doc.setTextColor(0, 82, 204);
  doc.text("SATS SOLUTIONS", 105, y, { align: "center" }); y += 15;

  doc.setFontSize(14);
  doc.setTextColor(100, 100, 100);
  doc.text("EXECUTIVE STRATEGY WHITE PAPER 2026", 105, y, { align: "center" }); y += 20;

  doc.setLineWidth(0.8);
  doc.line(20, y, 190, y); y += 15;

  addText(`TITLE: ${title.toUpperCase()}`, 16, "bold", [10, 22, 40]);
  addText("1. EXECUTIVE SUMMARY", 14, "bold", [0, 82, 204]);
  addText("In 2026, the competitive landscape for global enterprises is no longer defined by data availability, but by the speed and security of autonomous decision-making. SATS Solutions provides the strategic framework required for organizations to transition from legacy manual operations to AI-driven ecosystems.", 11);

  addText("2. THE SATS DNA: ELITE LEADERSHIP", 14, "bold", [0, 82, 204]);
  addText("Our firm is built upon the academic excellence of USA America's most prestigious institutions (University of Yale, University of Pennsylvania, Harvard University, Georgia Tech University), bringing together a technical council that understands both business logic and deep-code implementation.", 11);

  // PAGE 2: CORE COMPETENCIES
  doc.addPage(); y = 30;
  addText("3. CORE TECHNICAL PILLARS", 14, "bold", [0, 82, 204]);

  addText("3.1 PRIVATE CLOUD LLM DEPLOYMENT", 12, "bold");
  addText("Unlike generic, public AI models, SATS engineers build 'walled-garden' AI architectures. We deploy localized Large Language Models (LLMs) that reside entirely within your VPC (Virtual Private Cloud).", 11);

  addText("3.2 ZERO-TRUST SECURITY INFRASTRUCTURE", 12, "bold");
  addText("With our UPenn-bred cybersecurity DNA, we eliminate the concept of 'trusted networks.' Every request, every packet, and every identity is verified at the application layer.", 11);

  // PAGE 3: SECTOR IMPACT & CONCLUSION
  doc.addPage(); y = 30;
  addText("4. SECTOR APPLICATIONS: REAL-WORLD IMPACT", 14, "bold", [0, 82, 204]);

  addText("4.1 MEDICAL AUTOMATION", 12, "bold");
  addText("SATS Solutions has pioneered an AI-driven NLP pipeline that automates HL7/FHIR data extraction, reducing hospital administrative headcount by up to 30%.", 11);

  y += 20;
  doc.setLineWidth(0.5); doc.line(20, y, 190, y); y += 15;

  addText("5. CONCLUSION", 14, "bold", [0, 82, 204]);
  addText("SATS Solutions builds the sustainable technical edge required for the next decade of innovation.", 11);

  y = 260;
  doc.setFontSize(10);
  doc.setTextColor(150, 150, 150);
  doc.text("© 2026 SATS Solutions. All Rights Reserved.", 105, y, { align: "center" });

  doc.save(`SATS_${title.replace(/\s+/g, '_')}_2026.pdf`);
};
