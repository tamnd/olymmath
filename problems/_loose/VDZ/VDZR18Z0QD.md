---
tag: VDZR18Z0QD
kind: problem
type: answer
answer: a_{n}={\begin{pmatrix}1,\quadn=0,\\0\prod_{k=1}^{n}(2^{k}-1)^{2},n\in{N}_{+}0)\end{pmatrix}.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121196
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence of positive numbers $a_{0}, a_{1}, \cdots, a_{n}, \cdots$ satisfy
$$
\sqrt{a_{n} a_{n-2}}-\sqrt{a_{n-1} a_{n-2}}=2 a_{n-1}(n \geqslant 2) \text {, }
$$

and $a_{0}=a_{1}=1$. Find the general term formula for the sequence $\left\{a_{n}\right\}$.
