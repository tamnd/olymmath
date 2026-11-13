---
tag: BENDZHZNW7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128319
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n, k \in N$ and satisfy $k \leqslant \frac{n}{2}$, forming a sequence of $n k$ terms by repeating the sequence of integers from 1 to $n$:
$$
1,2, \cdots, n, 1,2, \cdots, n, \cdots, 1,2, \cdots, n \text {. }
$$

Taking $k$ numbers at a time from left to right, we obtain $n$ subsequences $B_{1}, B_{2}, \cdots, B_{n}$, prove that among $B_{1}$, $B_{2}, \cdots, B_{n}$, at most $k$ are pairwise non-empty intersections.
