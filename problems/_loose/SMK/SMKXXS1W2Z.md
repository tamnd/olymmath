---
tag: SMKXXS1W2Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206877
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: \mathbb N \to \mathbb N$ be a function such that $f(1)=1$ and
$$f(n)=n - f(f(n-1)), \forall n \geq 2.$$
Prove that $f(n+f(n))=n $ for each positive integer $n.$
