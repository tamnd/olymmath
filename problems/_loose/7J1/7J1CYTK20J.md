---
tag: 7J1CYTK20J
kind: problem
type: answer
answer: (2,,2-2)\mid\geqslant3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89757
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples of natural numbers $(p, m, n)$ such that $p$ is prime, $m<n$, and there exist natural numbers $a, b, c, d$ that are not divisible by $p$ such that

$$
\begin{aligned}
& a b+c d=p^{m} \\
& a c+b d=p^{n}
\end{aligned}
$$
