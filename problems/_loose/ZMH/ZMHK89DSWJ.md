---
tag: ZMHK89DSWJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h282688
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65348
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198491
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
The expression $ 2 + \sqrt{2} + \frac{1}{2 + \sqrt{2}} + \frac{1}{\sqrt{2} - 2}$ equals:

$ \textbf{(A)}\ 2
\textbf{(B)}\ 2 - \sqrt{2}
\textbf{(C)}\ 2 + \sqrt{2}
\textbf{(D)}\ 2\sqrt{2}
\textbf{(E)}\ \frac{\sqrt{2}}{2}$
