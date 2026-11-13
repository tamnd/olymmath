---
tag: A41PCHFDHS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131309
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequences $\left\{a_{n}\right\}(n \geqslant 0),\left\{b_{n}\right\}$ $(n \geqslant 0)$ of non-negative real numbers, satisfying for any positive integer $n$,
$$
a_{n}^{2} \leqslant a_{n-1} a_{n+1}, b_{n}^{2} \leqslant b_{n-1} b_{n+1} .
$$

Let the sequence $\left\{c_{n}\right\}(n \geqslant 0)$ satisfy $c_{0}=a_{0} b_{0}$, and for any positive integer $n$,
$$
c_{n}=\sum_{i=0}^{n} \mathrm{C}_{n}^{i} a_{i} b_{n-i} .
$$

Prove: For any positive integer $n$,
$$
c_{n}^{2} \leqslant c_{n-1} c_{n+1} \text {. }
$$
