---
tag: DVNQT2V768
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251148
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $(a_n)$ is given by $a_1 = x \in \mathbb{R}$ and $3a_{n+1} = a_n+1$ for $n \geq 1$. Set

$A = \sum_{n=1}^\infty \Big[ a_n - \frac{1}{6}\Big]$, $B = \sum_{n=1}^\infty \Big[ a_n + \frac{1}{6}\Big]$.

Compute the sum $A+B$ in terms of $x$.
