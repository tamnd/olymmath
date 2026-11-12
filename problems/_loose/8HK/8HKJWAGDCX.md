---
tag: 8HKJWAGDCX
kind: problem
type: answer
answer: I_{2}^{*}=\frac{1}{n}\sum_{i=1}^{n}\frac{\varphi(x_{i})}{f(x_{i})}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32522
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Output the formula $I_{2}^{*}=\frac{1}{n} \sum_{i=1}^{n} \frac{\varphi\left(x_{i}\right)}{f\left(x_{i}\right)}$ for estimating the definite integral $I=\int_{a}^{b} \varphi(x) \mathrm{d} x$, where $f(x)$ is the density function of the "auxiliary" random variable $X$ in the integration interval $(a, b) ; x_{i}$ are possible values of $X$, sampled according to the known density $f(x) ; n$ is the number of trials.
