---
tag: ACSQJGDD2P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212501
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A function $f_n(x)\ (n=1,\ 2,\ \cdots)$ is defined by $f_1(x)=x$ and
$$f_n(x)=x+\frac{e}{2}\int_0^1 f_{n-1}(t)e^{x-t}dt\ (n=2,\ 3,\ \cdots)$$.
Find $f_n(x)$.
