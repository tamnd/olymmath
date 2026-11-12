---
tag: 8K93AN5CBK
kind: problem
type: answer
answer: I_{i}^{*}=(b-)\cdot\frac{\sum_{i=1}^{n}\varphi(x_{i})}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32517
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Output the formula

$$
I_{1}^{\hbar}=(b-a) \frac{\sum_{i=1}^{n} \varphi\left(x_{i}\right)}{n}
$$

where $x_{i}=a+(b-a) r_{i}$, for estimating the definite integral $l=\int_{a}^{b} \varphi(x) \mathrm{d} x$.
