---
tag: CDW8PEN860
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h570680
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65591
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198654
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
Given the equation $3x^2 - 4x + k = 0$ with real roots. The value of $k$ for which the product of the roots of the equation is a maximum is: $\textbf{(A)}\ \dfrac{16}{9} \textbf{(B)}\ \dfrac{16}{3} \textbf{(C)}\ \dfrac{4}{9} \textbf{(D)}\ \dfrac{4}{3} \textbf{(E)}\ -\dfrac{4}{3}$
