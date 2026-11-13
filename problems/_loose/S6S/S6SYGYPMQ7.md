---
tag: S6SYGYPMQ7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An infinite sequence of integers $a_{0}, a_{1}, a_{2}, \cdots$ (which can be the same) satisfies the following properties: for all non-negative integers $i$, we have $0 \leqslant a_{i} \leqslant i$, and for all non-negative integers $k$, we have
$$
\mathrm{C}_{k}^{a_{0}}+\mathrm{C}_{k}^{a_{1}}+\cdots+\mathrm{C}_{k}^{a_{k}}=2^{k} \text {. }
$$

Prove: All non-negative integers $N$ appear in this sequence, i.e., for all non-negative integers $N$, there exists a non-negative integer $i$ such that $a_{i}=N$.
