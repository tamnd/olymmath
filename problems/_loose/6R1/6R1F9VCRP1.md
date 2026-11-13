---
tag: 6R1F9VCRP1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210902
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a sequence $a_n$ satisfying :
$$a_1=1,\ \ a_{n+1}=\frac{na_n}{2+n(a_n+1)}\ (n=1,\ 2,\ 3,\ \cdots).$$

Find $\lim_{m\to\infty} m\sum_{n=m+1}^{2m} a_n.$
