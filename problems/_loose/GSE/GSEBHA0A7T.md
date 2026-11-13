---
tag: GSEBHA0A7T
kind: problem
type: answer
answer: (5,3,2),(2,11,7),(2,3,11)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75572
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triples of distinct prime numbers $p, q, r$ satisfying the following conditions:

$$
\begin{array}{l|l}
p & q+r, \\
q & \mid r+2 p, \\
r & \mid p+3 q .
\end{array}
$$

(M. Panák)
