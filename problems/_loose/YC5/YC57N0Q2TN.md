---
tag: YC57N0Q2TN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h281572
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65303
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256776
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
The value of $ x - y^{x - y}$ when $ x = 2$ and $ y = -2$ is:

$ \textbf{(A)}\ -18
\textbf{(B)}\ -14
\textbf{(C)}\ 14
\textbf{(D)}\ 18
\textbf{(E)}\ 256$
