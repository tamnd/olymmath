---
tag: Q0TZK6R1X3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209427
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A function $f_n(x)\ (n=0,\ 1,\ 2,\ 3,\ \cdots)$ satisfies the following conditions:

(i) $f_0(x)=e^{2x}+1$.

(ii) $f_n(x)=\int_0^x (n+2t)f_{n-1}(t)dt-\frac{2x^{n+1}}{n+1}\ (n=1,\ 2,\ 3,\ \cdots).$

Find $\sum_{n=1}^{\infty} f_n'\left(\frac 12\right).$
