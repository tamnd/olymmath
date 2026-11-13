---
tag: SNFHG67TS7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=69934
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Prove that $C_{n}^{0}-C_{n-1}^{1} \frac{1}{4}+C_{n-2}^{2} \frac{1}{4^{2}}-\ldots+(-1)^{i} C_{n-i}^{i} \frac{1}{4^{i}}+\ldots=\frac{n+1}{2^{n}}$ (the sum is taken over all integers $i, 0 \leq i \leq n / 2$).

b) Prove that if $p$ and $q$ are different numbers and $p+q=1$, then

$$
C_{n}^{0}-C_{n-1}^{1} p q+C_{n-2}^{2} p^{2} q^{2}-\ldots+(-1)^{i} C_{n-i}^{i} p^{i} q^{i}+\ldots=\frac{p^{n+1}-q^{n+1}}{p-q}
$$
