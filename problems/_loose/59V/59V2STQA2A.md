---
tag: 59V2STQA2A
kind: problem
type: answer
answer: \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209496
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a curve $C$ on the $x$-$y$ plane expressed by $x=\tan \theta ,\ y=\frac{1}{\cos \theta}\left (0\leq \theta <\frac{\pi}{2}\right)$.
For a constant $t>0$, let the line $l$ pass through the point $P(t,\ 0)$ and is perpendicular to the $x$-axis,intersects with the curve $C$ at $Q$. Denote by $S_1$ the area of the figure bounded by the curve $C$, the $x$-axis, the $y$-axis and the line $l$, and denote by $S_2$ the area of $\triangle{OPQ}$. Find $\lim_{t\to\infty} \frac{S_1-S_2}{\ln t}.$
