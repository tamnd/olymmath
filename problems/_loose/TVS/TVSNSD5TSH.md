---
tag: TVSNSD5TSH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184558
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Frank and Jens are playing a game they call "Car Race." For this, they have enclosed a playing area on square-grid paper through a path $A B C D E F G A$, where $A, B, C, D, E, F, G$ denote grid points. Each player is to reach the "finish line" $D E$ or go beyond it from the "start line" $A G$ by forming a path $P_{0} P_{1} P_{2} \ldots P_{n}$, which is supposed to represent the vehicle's route, where the $P_{0}, P_{1}, \ldots, P_{n}$ are grid points. None of the segments $P_{0} P_{1}, P_{1} P_{2}, \ldots, P_{n-1} P_{n}$ of the path may touch or intersect the boundary of the playing field (with the exception of the start and finish lines). A "move" is understood as the transition from one point $P_{k}$ to the next point $P_{k+1}$. The game rules are as follows:

(1) $P_{0}$ lies on $A B$

(2) The first "move" consists of the segment $P_{0} P_{1}$, where $\overline{P_{0} P_{1}}=1$ (side length of the basic square) is.

(3) If a "move" $P_{k-1} P_{k}$ has already been executed, the next "move" $P_{k} P_{k+1}$ is found as follows:

a) One extends the segment $P_{k-1} P_{k}$ beyond $P_{k}$ by itself to a point called $Q_{k}$.

b) One chooses either the point $Q_{k}$ or one of its eight neighboring grid points as the point $P_{k+1}$.
