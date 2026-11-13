---
tag: CFH0BPNGYJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h281604
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65320
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256793
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
From a point within a triangle, line segments are drawn to the vertices. A necessary and sufficient condition that the three triangles thus formed have equal areas is that the point be:

$ \textbf{(A)}\ \text{the center of the inscribed circle}
\textbf{(B)}\ \text{the center of the circumscribed circle}
\textbf{(C)}\ \text{such that the three angles fromed at the point each be }{120^\circ}
\textbf{(D)}\ \text{the intersection of the altitudes of the triangle}
\textbf{(E)}\ \text{the intersection of the medians of the triangle}$
