---
tag: E3ZBHA1XK4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104526
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{a_{n}\right\}$ satisfy $a_{0}=0, a_{n} \geqslant 0$, and
$$
\frac{a_{i-1}+a_{i+1}}{2} \leqslant a_{i}(i=1,2, \cdots, n-1) .
$$

Prove: For any positive integer $n$, we have
$$
\left(\sum_{k=1}^{n} a_{k}\right)^{2} \geqslant \frac{3(n-1)}{4} \sum_{k=1}^{n} a_{k}^{2} \text {. }
$$
