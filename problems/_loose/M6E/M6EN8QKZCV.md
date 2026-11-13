---
tag: M6EN8QKZCV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121966
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $a_{1}, a_{2}, \cdots, a_{n}, \cdots$ satisfies
$$
\left\{\begin{array}{l}
a_{1}=\frac{1}{2} \\
a_{n}=\frac{1}{3 n-1}\left(a_{1} a_{n-1}+a_{2} a_{n-2}+\cdots+a_{n-2} a_{2}+a_{n-1} a_{1}\right)(n \geqslant 2)
\end{array} \text {. Prove: } a_{n+1}<a_{n}\right. \text {. }
$$
