---
tag: XSS8Q2SM6D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253788
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the sum of squares of the digits of the least positive integer having $72$ positive divisors.

$\textbf{(A)}\ 41 \textbf{(B)}\ 65 \textbf{(C)}\ 110 \textbf{(D)}\ 123 \textbf{(E)}\ \text{None}$
