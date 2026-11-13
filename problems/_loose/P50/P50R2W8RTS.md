---
tag: P50R2W8RTS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178766
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the function $f(x)=a_{2} x^{2}+a_{1} x+a_{0}$ with coefficients $a_{0}, a_{1}, a_{2} \in \mathbb{R}$, show that a primitive of the function $\frac{f(x)-f(k)}{x-k}$, where $k$ is a real constant, is

$$
F(x)=\frac{1}{2}\left(f(x)+a_{1} x+a_{0}\right)+k\left(f^{\prime}(x)-a_{2} x-a_{1}\right)
$$

Mathematical Gazette 1956
