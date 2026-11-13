---
tag: M4HNWSA0GM
kind: problem
type: answer
answer: \frac{3\pi}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210914
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For real numbers $a,\ b$ with $0\leq a\leq \pi,\ a<b$, let $I(a,\ b)=\int_{a}^{b} e^{-x} \sin x\ dx.$

Determine the value of $a$ such that $\lim_{b\rightarrow \infty} I(a,\ b)=0.$
