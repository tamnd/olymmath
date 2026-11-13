---
tag: M3Y3RRJMM9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127354
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $[x]$ denote the greatest integer not exceeding the real number $x$. Define the sequence $a_{0}, a_{1}, \cdots$ such that
$$
a_{0}=1, a_{n}=a_{n-1}+a_{\left[\frac{n}{3}\right]}(n=1,2, \cdots) \text {. }
$$

Prove: For each prime $p \in\{2,3,5,7,11, 13\}$, there exist infinitely many $n \in \mathbf{Z}_{+}$, such that $p \mid a_{n}$.
