---
tag: 3PCZGHAAD3
kind: problem
type: answer
answer: a_{n}-a_{1}\geqslant\frac{2S}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=147274
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \cdots, a_{n}$ be real numbers, and $S$ be a non-negative real number, such that
(1) $a_{1} \leqslant a_{2} \leqslant \cdots \leqslant a_{n}$; (2) $a_{1}+a_{2}+\cdots+a_{n}=0$; (3) $\left|a_{1}\right|+\left|a_{2}\right|+\cdots+\left|a_{n}\right|=$
$S$.
Prove: $a_{n}-a_{1} \geqslant \frac{2 S}{n}$.
