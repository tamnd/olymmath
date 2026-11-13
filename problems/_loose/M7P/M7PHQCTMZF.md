---
tag: M7PHQCTMZF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268039
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ a_1$, $ a_2$, $ \ldots$, $ a_n$ be positive real numbers ($ n \ge 2$) whose sum is $ S$. Show
that $$ \sum_{i=1}^n\frac{a_i^{2^{k}}}{\left(S-a_i\right)^{2^t-1}}\ge\frac{S^{1+2^k-2^t}}{\left(n-1\right)^{2^t-1}n^{2^k-2^t}}$$ for any nonnegative integers $ k$, $ t$ with $ k \ge t$. When does equality occur?
