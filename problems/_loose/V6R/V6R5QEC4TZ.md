---
tag: V6R5QEC4TZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h282681
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65344
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198447
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
The value of $ [2 - 3(2 - 3)^{-1}]^{-1}$ is:

$ \textbf{(A)}\ 5
\textbf{(B)}\ -5
\textbf{(C)}\ \frac{1}{5}
\textbf{(D)}\ -\frac{1}{5}
\textbf{(E)}\ \frac{5}{3}$
