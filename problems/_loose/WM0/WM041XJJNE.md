---
tag: WM041XJJNE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245868
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{n_{k}\}_{k \ge 1}$ be a sequence of natural numbers such that for $i<j$, the decimal representation of $n_{i}$ does not occur as the leftmost digits of the decimal representation of $n_{j}$. Prove that $$\sum^{\infty}_{k=1}\frac{1}{n_{k}}\le \frac{1}{1}+\frac{1}{2}+\cdots+\frac{1}{9}.$$
