---
tag: TZX0YD86YM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209086
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $<a_n>$ be a sequence of non-negative real numbers such that $a_{m+n} \le a_m +a_n$ for all $m,n \in \mathbb{N}$.
Prove that
$$\sum_{k=1}^{N} \frac{a_k}{k^2}\ge \frac{a_N}{4N}\ln N$$
for any $N \in \mathbb{N}$, where $\ln$ denotes the natural logarithm.
