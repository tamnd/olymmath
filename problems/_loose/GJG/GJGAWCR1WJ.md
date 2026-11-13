---
tag: GJGAWCR1WJ
kind: problem
type: answer
answer: \frac{f(n)}{n!} = \sum_{k=0}^n \frac{(-1)^k}{k!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a function $f$ on nonnegative integers such that $f(0)=1, f(1)=0$ and $f(n)+f(n-1)=nf(n-1)+(n-1)f(n-2)$ for $n \ge 2$. Show that
$$\frac{f(n)}{n!}=\sum_{k=0}^n \frac{(-1)^k}{k!}$$
