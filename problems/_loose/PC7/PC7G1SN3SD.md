---
tag: PC7G1SN3SD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h250662
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65670
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257143
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
When $ y^2 + my + 2$ is divided by $ y - 1$ the quotient is $ f(y)$ and the remainder is $ R_1$ . When $ y^2 + my + 2$ is divided by $ y + 1$ the quotient is $ g(y)$ and the remainder is $ R_2$ . If $ R_1 = R_2$ then $ m$ is:

$ \textbf{(A)}\ 0 \textbf{(B)}\ 1 \textbf{(C)}\ 2 \textbf{(D)}\ - 1 \textbf{(E)}\ \text{an undetermined constant}$
