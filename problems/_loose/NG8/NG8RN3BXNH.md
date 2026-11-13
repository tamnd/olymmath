---
tag: NG8RN3BXNH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135902
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two integer sequences $a_{0}, a_{1}, \cdots$ and $b_{0}, b_{1}, \cdots$ that satisfy:
(1) For any non-negative integer $n$,
$$
\left|a_{n+2}-a_{n}\right| \leqslant 2 \text {; }
$$
(2) For any non-negative integers $m, n$,
$$
a_{m}+a_{n}=b_{m^{2}+n^{2}} \text {. }
$$

Prove: The sequence $a_{0}, a_{1}, \cdots$ contains at most six different numbers.
