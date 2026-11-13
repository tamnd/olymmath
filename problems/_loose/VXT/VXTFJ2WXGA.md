---
tag: VXTFJ2WXGA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210950
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)$ be a function which is differentiable twice and $f''(x)>0$ on $[0,\ 1]$.

For a positive integer $n$, find $\lim_{n\to\infty} n\left\{\int_0^1 f(x)\ dx-\frac{1}{n}\sum_{k=0}^{n-1} f\left(\frac{k}{n}\right)\right\}.$
