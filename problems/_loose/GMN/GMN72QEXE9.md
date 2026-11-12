---
tag: GMN72QEXE9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 India IMOTC
    url: https://artofproblemsolving.com/community/c6h3585188
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2652
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2025
    source: hf-ai-mo-aops
    label: 2025 India IMOTC
---
At time $t=0$ , Hobbes writes down positive real numbers at the vertices of a regular polygon $P_1P_2\dots P_n$ . Suppose that after an even number of seconds, the numbers $x$ and $y$ are written on $P_i$ and $P_{i+1}$ respectively. Then one second later, Hobbes updates the number at $P_i$ to $x+\frac{1}{y}$ . Here $i$ is taken modulo $n$ .

For which pairs $(i,j)$ (in terms of $n$ ) can we guarantee (without knowing what Hobbes wrote down) that at some point in time the number at $P_i$ is at least as large as the number at $P_j$ ?**Note.** The numbers are all updated only whenever an odd number of seconds have passed. If all the numbers were initially $1$ then after $1$ second they would all be updated to $2$ then at $T=3s$ , they will all be updated to $2.5$ and so on.

*Proposed by Pranjal Srivastava*
