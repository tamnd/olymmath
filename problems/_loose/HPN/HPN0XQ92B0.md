---
tag: HPN0XQ92B0
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94840
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{a_{n}\right\}$ satisfies
$$
\begin{array}{l}
a_{1}=1, a_{2}=\frac{3}{2}, \\
a_{n}^{2}-a_{n} a_{n+1}-a_{n} a_{n-1}+a_{n+1} a_{n-1}+ \\
2 a_{n}-a_{n+1}-a_{n-1}=0(n \geqslant 2) .
\end{array}
$$

Prove: $a_{2016}>6$.
