---
tag: EP0B5H03AH
kind: problem
type: answer
answer: P(\xi_{n}=k)=\mathrm{C}_{n}^{r}p^{n-r}q^{r},
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136582
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let a particle on the $x$-axis initially be located at the origin. Assume that it is subjected to a random force every unit of time that causes its position to change, and it moves one unit to the right or left on the $x$-axis with probabilities $p$ and $q=1-\dot{p}$, respectively, but can only land on integer points on the $x$-axis. Find the probability that the particle is at integer point $k$ at time $t=n$.
