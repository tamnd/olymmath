---
tag: Y833ZQ8APN
kind: problem
type: answer
answer: (even,odd,even)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96992
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{D_{n}\right\}$ satisfies:
$$
\begin{array}{l}
D_{0}=D_{1}=0, D_{2}=1, \\
D_{n}=D_{n-1}+D_{n-3}(n \geqslant 3) .
\end{array}
$$

Then the parity of $\left(D_{2021}, D_{2022}, D_{2023}\right)$ is ( ).
(A) (odd, even, odd)
(B) (even, even, odd)
(C) (even, odd, even)
(D) (odd, odd, even)
(E) (odd, odd, odd)
