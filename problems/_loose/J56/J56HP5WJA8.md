---
tag: J56HP5WJA8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h282744
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65383
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198481
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
Given $ a_0 = 1$ , $ a_1 = 3$ , and the general relation $ a_n^2 - a_{n - 1}a_{n + 1} = (-1)^n$ for $ n \ge 1$ . Then $ a_3$ equals:

$ \textbf{(A)}\ \frac{13}{27}
\textbf{(B)}\ 33
\textbf{(C)}\ 21
\textbf{(D)}\ 10
\textbf{(E)}\ -17$
