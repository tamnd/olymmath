---
tag: DXX2GMX9FN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214849
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\ge2$ and let $p(x)=x^n+a_{n-1}x^{n-1} \cdots a_1x+a_0$ be a polynomial with real coefficients.
Prove that if for some positive integer $k(<n)$ the polynomial $(x-1)^{k+1}$ divides $p(x)$ then
$$\sum_{i=0}^{n-1}|a_i| \ge 1 +\frac{2k^2}{n}$$
