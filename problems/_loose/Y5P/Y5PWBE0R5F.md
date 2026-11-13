---
tag: Y5PWBE0R5F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a circle with circumference $n\left(n \in \mathbf{Z}_{+}\right)$, integers $0,1, \cdots, n-1$ are placed in a clockwise direction at equal intervals. Each integer is colored red or blue, ensuring that each color contains at least one non-zero integer. It is known that there exists a subset $S \varsubsetneqq \{0,1, \cdots, n-1\}$ such that $|S| \geqslant 2$, and it has the following property: for any directed arc $(x, y)$ in the clockwise direction with endpoints of different colors and length in $S$, the endpoint integer $y \in S$. Prove: There exists a non-trivial positive divisor $d(d \notin\{1, n\})$ of $n$, such that if the length of the arc $(x, y)$ is divisible by $d$ and $d \nmid x, d \nmid y$, then $x$ and $y$ must be the same color.
