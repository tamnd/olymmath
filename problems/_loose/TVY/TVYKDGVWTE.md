---
tag: TVYKDGVWTE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h1097771
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32856
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2002
    source: hf-ai-mo-aops
    label: 2002 Olympic Revenge
---
Let $p$ a prime number, and $N$ the number of matrices $p \times p$

$$\begin{array}{cccc}
a_{11} & a_{12} & \ldots & a_{1p}
a_{21} & a_{22} & \ldots & a_{2p}
\vdots & \vdots & \ddots & \vdots
a_{p1} & a_{p2} & \ldots & a_{pp}
\end{array}$$

such that $a_{ij} \in \{0,1,2,\ldots,p\} $ and if $i \leq i^\prime$ and $j \leq j^\prime$, then $a_{ij} \leq a_{i^\prime j^\prime}$.

Find $N \pmod{p}$.
