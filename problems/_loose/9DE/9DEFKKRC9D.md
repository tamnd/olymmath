---
tag: 9DEFKKRC9D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h132502
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66942
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=258433
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
For each integer $ n > 1,$ let $ F(n)$ be the number of solutions of the equation $ \sin x = \sin nx$ on the interval $ [0,\pi].$ What is $ \sum_{n = 2}^{2007}F(n)?$

$ \textbf{(A)}\ 2,014,524 \textbf{(B)}\ 2,015,028 \textbf{(C)}\ 2,015,033 \textbf{(D)}\ 2,016,532 \textbf{(E)}\ 2,017,033$
