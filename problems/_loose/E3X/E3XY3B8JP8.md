---
tag: E3XY3B8JP8
kind: problem
type: answer
answer: \frac{2a-1}{8a+4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ be a strictly positive real number. Determine the minimum value of the expression

$$
\left(\int_{0}^{1} f(x) \mathrm{d} x\right)^{2}-(a+1) \int_{0}^{1} x^{2 a} f(x) \mathrm{d} x
$$

as $f$ ranges over the set of concave functions $f:[0,1] \rightarrow \mathbb{R}$, with $f(0)=1$.
