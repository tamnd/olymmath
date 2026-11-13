---
tag: CRNZAK5DPV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114933
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer, and call the intersection points of the grid lines of an $n \times n$ square grid $T_{n}$ (a total of $(n+1)^{2}$ points) as grid points. Now, the numbers $1,2, \cdots,(n+1)^{2}$ are assigned to all the grid points of $T_{n}$, such that different grid points receive different numbers. A $1 \times 1$ cell $S$ of $T_{n}$ is called a "good cell" if, starting from one of its vertices and reading the numbers on the four vertices in a counterclockwise direction, the numbers are in increasing order (for example, Figure 3 shows one way to assign the numbers $1,2, \cdots, 9$ to the grid points of $T_{2}$, where $B$ and $C$ are good cells, while $A$ and $D$ are not good cells). Let the maximum number of good cells in $T_{n}$ be $f(n)$.
(1) Find the value of $f(2)$;
(2) Find the expression for $f(n)$ in terms of the positive integer $n$.
