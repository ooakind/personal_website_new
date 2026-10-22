// Read the rendered CV so exports always use the same content as the website.
export async function createCvPdf(container) {
  const { jsPDF } = await import('jspdf');
  const pdf = new jsPDF({ unit: 'mm', format: 'a4' });
  const margin = 18;
  const width = 174;
  const bottom = 276;
  let y = 22;
  const clean = (text) => text.replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"').replace(/[\u2010-\u2015]/g, '-')
    .replace(/\u00a0/g, ' ').trim();
  const room = (height) => {
    if (y + height > bottom) { pdf.addPage(); y = 22; }
  };
  const write = (text, { size = 10, bold = false, center = false, gap = 3, keep = 0 } = {}) => {
    pdf.setFont('helvetica', bold ? 'bold' : 'normal');
    pdf.setFontSize(size);
    pdf.setTextColor(30, 41, 59);
    const lines = pdf.splitTextToSize(clean(text), width);
    const lineHeight = size * 0.3528 * 1.35;
    const height = lines.length * lineHeight;
    // Keep ordinary entries together; unusually long entries may span pages.
    room(Math.min(height + keep, bottom - 22));
    for (const line of lines) {
      room(lineHeight);
      pdf.text(line, center ? 105 : margin, y, center ? { align: 'center' } : {});
      y += lineHeight;
    }
    y += gap;
  };
  const header = container.firstElementChild;
  const name = header.querySelector('h1').innerText;
  pdf.setProperties({ title: `${name} - Curriculum Vitae`, author: name });
  write(name, { size: 19, bold: true, center: true, gap: 2 });
  const contact = [...header.querySelectorAll('span')]
    .map(node => node.textContent.trim()).filter(text => text && text !== '•');
  write(contact.join('  |  '), { size: 9, center: true, gap: 9 });

  const renderGroup = (group) => {
    for (const child of group.children) {
      if (child.matches('h3')) {
        write(child.innerText.toUpperCase(), { size: 11, bold: true, gap: 2, keep: 17 });
        pdf.setDrawColor(203, 213, 225);
        pdf.line(margin, y, margin + width, y);
        y += 5;
      } else if (child.matches('h4')) {
        write(child.innerText, { size: 10, bold: true, keep: 16 });
      } else if (child.querySelector('h3, h4')) {
        renderGroup(child);
      } else if (child.children.length) {
        for (const entry of child.children) {
          write(entry.innerText.replace(/\n+/g, '\n'), { gap: 4 });
        }
      } else if (child.innerText.trim()) {
        write(child.innerText);
      }
    }
  };
  for (const section of [...container.children].slice(1)) {
    renderGroup(section);
    y += 4;
  }
  const pages = pdf.getNumberOfPages();
  for (let page = 1; page <= pages; page++) {
    pdf.setPage(page);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8);
    pdf.setTextColor(100, 116, 139);
    pdf.text(`${name} | Curriculum Vitae`, margin, 287);
    pdf.text(`${page} / ${pages}`, 192, 287, { align: 'right' });
  }
  return pdf;
}
