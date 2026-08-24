# John Swaroop — Portfolio

A responsive, single-page portfolio positioning John as a founder, full-stack engineer and applied AI specialist with end-to-end product ownership.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Replace project screenshots

The three project visuals in `src/main.jsx` are intentionally designed placeholders. Replace the matching `ProjectVisual` markup with supplied product screenshots when they are available. Preserve the surrounding `.project-visual` container to retain the current sizing and responsive behavior.

## Résumé

- Editable version: `deliverables/John-Swaroop-Resume.docx`
- PDF version: `deliverables/John-Swaroop-Resume.pdf`
- Website download copy: `public/resume/John-Swaroop-Resume.pdf`

Rebuild the résumé after content changes with:

```bash
python3 -m pip install -r requirements-resume.txt
python3 scripts/build_resume.py
```

The generator keeps the editable document, PDF and website download synchronized.
