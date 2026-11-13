---
tag: YWTE1K7GBV
kind: problem
type: answer
answer: A
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243028
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. A \emph{pseudo-Gangnam Style} is a dance competition between players $A$ and $B$. At time $0$, both players face to the north. For every $k\ge 1$, at time $2k-1$, player $A$ can either choose to stay stationary, or turn $90^{\circ}$ clockwise, and player $B$ is forced to follow him; at time $2k$, player $B$ can either choose to stay stationary, or turn $90^{\circ}$ clockwise, and player $A$ is forced to follow him.

After time $n$, the music stops and the competition is over. If the final position of both players is north or east, $A$ wins. If the final position of both players is south or west, $B$ wins. Determine who has a winning strategy when:

(a) $n=2013^{2012}$

(b) $n=2013^{2013}$
