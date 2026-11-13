---
tag: Q592VNNYPP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0000.parquet#row=255
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo
    source: hf-mathnet
    label: China China Mathematical Olympiad
---
Let $n > 1$ be a given integer and $A$ be an infinite set of positive integers satisfying: for any prime $p \nmid n$, there exist infinitely many elements of $A$ not divisible by $p$. Prove that for any integer $m > 1$, $(m, n) = 1$, there exists a finite subset of $A$ whose sum of elements, say $S$, satisfies $S \equiv 1 \pmod m$ and $S \equiv 0 \pmod n$.
