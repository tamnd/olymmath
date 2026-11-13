---
tag: 6ETSGBJ0H4
kind: problem
type: answer
answer: \frac{x-1}{x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=192621
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $a_{1}=\frac{1}{1-x}, a_{2}=\frac{1}{1-a_{1}}$, and $a_{n}=\frac{1}{1-a_{n-1}}$, for $n \geq 2, x \neq 1$ and $x \neq 0$, then $a_{107}$ is
(A) $\frac{1}{1-x}$
(B) $x$
(C) $-x$
(D) $\frac{x-1}{x}$
(E) $\frac{1}{x}$
