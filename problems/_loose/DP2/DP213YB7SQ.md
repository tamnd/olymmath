---
tag: DP213YB7SQ
kind: problem
type: answer
answer: "999"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142495
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A function defined on the set of natural numbers $N$
$$
f(n)=\left\{\begin{array}{ll}
n-3, & \text { if } n \geqslant 1000, \\
f[f(n+7)], & \text { if } n<1000 .
\end{array}\right.
$$

Then the value of $f(90)$ is
(A) 997 .
(B) 998 .
(C) 999 .
(D) 1000 .
(2nd "Hope Cup" National Mathematics Invitational Competition, 1991)
