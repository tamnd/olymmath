---
tag: SXE6S21SSB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82052
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number.

Using Fermat's Little Theorem, show that in $\mathbb{Z} / p \mathbb{Z}[X]$,

$$
(X+1)^{p}=X^{p}+1
$$

Deduce that for all $k \in \llbracket 1, p-1 \rrbracket, p \left\lvert\,\left(\begin{array}{l}p \\ k \\ k\end{array}\right)\right.$.
