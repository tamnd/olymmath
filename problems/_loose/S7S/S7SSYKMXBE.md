---
tag: S7SSYKMXBE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140006
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \cdots$ be a sequence of positive real numbers, and for all $i, j=1,2, \cdots$, satisfy $a_{i+j} \leqslant a_{i}+a_{j}$.
Prove: For positive integers $n$, we have $a_{1}+\frac{a_{2}}{2}+\frac{a_{3}}{3}+\cdots$
$$
+\frac{a_{n}}{n} \geqslant a_{n}
$$
