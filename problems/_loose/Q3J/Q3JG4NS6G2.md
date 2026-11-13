---
tag: Q3JG4NS6G2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165401
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Starting from a quadruple of positive numbers $(a, b, c, d)$, we sequentially form the quadruples $(a b, b c, c d, d a),(a b b c, b c c d, c d d a, d a a b), \ldots$. Prove that if by this method we get back the original quadruple, then $a=b=c=d=1$.
