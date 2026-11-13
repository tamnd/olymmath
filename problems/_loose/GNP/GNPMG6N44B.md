---
tag: GNPMG6N44B
kind: problem
type: answer
answer: x_n \leq \frac{n}{2} + c
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205056
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ be a positive integer. The sequence $x_1, x_2, \ldots$ of non-negative reals is defined by $$x_n^2=\sum_{i=1}^{n-1} \sqrt{x_ix_{n-i}}$$ for all positive integers $n>N$. Show that there exists a constant $c>0$, such that $x_n \leq \frac{n} {2}+c$ for all positive integers $n$.
