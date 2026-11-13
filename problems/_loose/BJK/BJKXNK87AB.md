---
tag: BJKXNK87AB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182125
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ be any positive real number. Prove:

a) If $x \neq \sqrt[n]{a}$ and $a>0$, then

$$
y=\frac{a+(n-1) x^{n}}{n x^{n-1}}>\sqrt[n]{a}
$$

b) If

$$
y_{1}>\sqrt[n]{a} ; y_{k}=\frac{a+(n-1) y_{k-1}^{n}}{n y_{k-1}^{n-1}} \text { and } z_{k}=\frac{a}{y_{k}^{n-1}}
$$

then the sequence $\left\{y_{k}\right\}$ converges monotonically decreasing (i.e., from above) and the sequence $\left\{z_{k}\right\}$ monotonically increasing (i.e., from below) to $\sqrt[n]{a}$.
