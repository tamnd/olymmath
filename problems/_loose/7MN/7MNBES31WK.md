---
tag: 7MNBES31WK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h486626
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44145
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240418
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/1997
    source: hf-ai-mo-aops
    label: 1997 Iran MO (3rd Round)
---
Let $P$ be a polynomial with integer coefficients. There exist integers $a$ and $b$ such that $P(a) \cdot P(b)=-(a-b)^2$ . Prove that $P(a)+P(b)=0$ .
