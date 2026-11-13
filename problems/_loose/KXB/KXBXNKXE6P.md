---
tag: KXBXNKXE6P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185961
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for all positive integers $m, n$ with $m>n$, the sum $s(m, n)$ defined by

$$
s(m, n)=\sum_{i=1}^{m} \sum_{j=1}^{n}|i-j|
$$

has the value:

$$
s(m, n)=\frac{1}{3}(n-1) n(n+1)+\frac{1}{2} m n(m-n)
$$
