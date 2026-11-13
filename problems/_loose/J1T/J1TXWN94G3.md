---
tag: J1TXWN94G3
kind: problem
type: answer
answer: 12+8\sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144945
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If the function $f: \mathbf{R} \rightarrow \mathbf{R}$ satisfies for all real numbers $x$,
$$
\sqrt{2 f(x)}-\sqrt{2 f(x)-f(2 x)} \geqslant 2
$$

then the function $f$ is said to have property $P$. Find the largest real number $\lambda$, such that if the function $f$ has property $P$, then for all real numbers $x$, $f(x) \geqslant \lambda$ always holds.
