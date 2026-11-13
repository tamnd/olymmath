---
tag: 9MPJ7VAJEG
kind: problem
type: answer
answer: "997"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111585
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Function $f$ is defined on the set of integers, satisfying
$$
f(n)=\left\{\begin{array}{ll}
n-3 & n \geqslant 1000 \\
f[f(n+5)] & n<1000
\end{array},\right.
$$

Find $f(84)$.
