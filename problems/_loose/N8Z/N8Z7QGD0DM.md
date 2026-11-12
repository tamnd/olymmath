---
tag: N8Z7QGD0DM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h536010
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9979
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
For every integer $n \ge 1$ , the function $f_n : \left\{ 0, 1, \cdots, n \right\} \to \mathbb R$ is defined recursively by $f_n(0) = 0$ , $f_n(1) = 1$ and $$ (n-k) f_n(k-1) + kf_n(k+1) = nf_n(k) $$ for each $1 \le k < n$ . Let $S_N = f_{N+1}(1) + f_{N+2}(2) + \cdots + f_{2N} (N)$ . Find the remainder when $\left\lfloor S_{2013} \right\rfloor$ is divided by $2011$ . (Here $\left\lfloor x \right\rfloor$ is the greatest integer not exceeding $x$ .)

*Proposed by Lewis Chen*
