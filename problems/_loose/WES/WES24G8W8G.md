---
tag: WES24G8W8G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=222095
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all integers $n>1$ that satisfy the following condition: for any positive integer $x$, if gcd$(x,n)=1$, then gcd$(x+101,n)=1$.
