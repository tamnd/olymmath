---
tag: PNPM9J5GAB
kind: problem
type: answer
answer: 1989,1990,1991,1992
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
27 Given the function $f(n)$ defined on the set of natural numbers, satisfying
$$
f(n)=\left\{\begin{array}{ll}
n-12 & \text { when } n>2000 \text { } \\
f(f(n+16)) & \text { when } n \leqslant 2000 \text { }
\end{array}\right.
$$
(i) Find $f(n)$.
(ii) Find all solutions to the equation $f(n)=n$.
