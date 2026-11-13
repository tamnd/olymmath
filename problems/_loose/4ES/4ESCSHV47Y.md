---
tag: 4ESCSHV47Y
kind: problem
type: answer
answer: a_{1}=2^{}(\in{Z}_{+})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any fixed positive integer $m$, define the infinite sequence $\left\{a_{n}\right\}(n \geqslant 1): a_{1}$ is a positive integer, for any $n \geqslant 1$,
$$
a_{n+1}=\left\{\begin{array}{ll}
a_{n}^{2}+2^{m}, & a_{n}<2^{m} \\
\frac{a_{n}}{2}, & a_{n} \geqslant 2^{m} .
\end{array}\right.
$$

For each $m$, determine all possible values of $a_{1}$ such that all terms in $\left\{a_{n}\right\}$ are integers.
