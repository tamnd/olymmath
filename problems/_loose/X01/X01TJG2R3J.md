---
tag: X01TJG2R3J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=68068
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove the identities

a) $x^{2 n}-1=\left(x^{2}-1\right) \cdot \prod_{k=1}^{n-1}\left(x^{2}-2 x \cos \frac{k \pi}{n}+1\right)$

b) $x^{2 n+1}-1=(x-1) \cdot \prod_{k=1}^{n}\left(x^{2}-2 x \cos \frac{2 k \pi}{2 n+1}+1\right)$;

c) $x^{2 n+1}+1=(x+1) \cdot \prod_{k=1}^{n}\left(x^{2}+2 x \cos \frac{2 k \pi}{2 n+1}+1\right)$;

d) $x^{2 n}+1=\prod_{k=0}^{n-1}\left(x^{2}-2 x \cos \frac{(2 k+1) \pi}{2 n}+1\right)$
