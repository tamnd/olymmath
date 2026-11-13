---
tag: ASETBR1RFQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h281602
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65318
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256791
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
If the square of a number of two digits is decreased by the square of the number formed by reversing the digits, then the result is not always divisible by:

$ \textbf{(A)}\ 9
\textbf{(B)}\ \text{the product of the digits}
\textbf{(C)}\ \text{the sum of the digits}
\textbf{(D)}\ \text{the difference of the digits}
\textbf{(E)}\ 11$
