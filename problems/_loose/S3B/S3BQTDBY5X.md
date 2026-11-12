---
tag: S3BQTDBY5X
kind: problem
type: answer
answer: n!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41761
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Try your hand at combinatorics. Prove that

$$
\sum_{i=0}^{n} \sum_{j=0}^{n}(-1)^{i+j} C_{n}^{i} C_{n}^{j} n^{i-j} j^{i}=n!
$$
