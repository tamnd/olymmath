---
tag: 7BDNFVKRV9
kind: problem
type: answer
answer: V_{K}=\frac{3}{8}V_{P}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184639
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a plane $\varepsilon$, there is an $n$-gon with vertices $A_{1}, A_{2}, \ldots, A_{n}$. This is the base of a pyramid with apex $S$. The volume of the pyramid is $V_{P}$. The midpoints of the edges $A_{1} S, A_{2} S, \ldots, A_{n} S$ are $M_{1}, M_{2}, \ldots, M_{n}$. Furthermore, let $B_{1}$ be any point in the plane $\varepsilon$.

The line parallel to $M_{1} B_{1}$ through each of the points $M_{2}, M_{3}, \ldots, M_{n}$ intersects $\varepsilon$ at $B_{2}, B_{3}, \ldots, B_{n}$. The body $K$ with vertices $B_{1}, B_{2}, \ldots, B_{n}, M_{1}, M_{2}, \ldots, M_{n}$ has the volume $V_{K}$.

a) Prove that all points $M_{1}, M_{2}, \ldots, M_{n}$ lie in a common plane parallel to $\varepsilon$ and that $K$ is therefore a prism!

b) Prove that $V_{K}$ is uniquely determined by $V_{P}$, and determine $V_{K}$ in terms of $V_{P}$!
