---
tag: D75KCMQPZJ
kind: problem
type: answer
answer: p_n = \frac{1}{6} (1 + p_{n-1})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210313
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Cast a dice $n$ times. Denote by $X_1,\ X_2,\ \cdots ,\ X_n$ the numbers shown on each dice. Define $Y_1,\ Y_2,\ \cdots,\ Y_n$ by
$$Y_1=X_1,\ Y_k=X_k+\frac{1}{Y_{k-1}}\ (k=2,\ \cdots,\ n)$$
Find the probability $p_n$ such that $\frac{1+\sqrt{3}}{2}\leq Y_n\leq 1+\sqrt{3}.$
