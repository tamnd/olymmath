---
tag: ZAG9KAEEVV
kind: problem
type: answer
answer: p=1,q=5;p=5,q=1;p=q=2;p=2,q=3;p=3,q=2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=45283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all natural numbers $p$ and $q$ for which the quadratic equation

$$
x^{2}-p q x+p+q=0
$$

has only integer roots.
