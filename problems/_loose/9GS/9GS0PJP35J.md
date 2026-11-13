---
tag: 9GS0PJP35J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h252036
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66663
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199685
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
Consider the sequence $$ 1, - 2,3, - 4,5, - 6,\ldots,$$ whose $ n$ th term is $ ( - 1)^{n + 1}\cdot n$ . What is the average of the first $ 200$ terms of the sequence? $ \textbf{(A)}- 1 \textbf{(B)}- 0.5 \textbf{(C)}\ 0 \textbf{(D)}\ 0.5 \textbf{(E)}\ 1$
