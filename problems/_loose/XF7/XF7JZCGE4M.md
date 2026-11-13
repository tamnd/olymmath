---
tag: XF7JZCGE4M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146102
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
C4 For each real number $x$, let $[x]$ be the largest integer less than or equal to $x$. For example, $[5]=5,[7.9]=7$ and $[-2.4]=-3$. An arithmetic progression of length $k$ is a sequence $a_{1}, a_{2}, \ldots, a_{k}$ with the property that there exists a real number $b$ such that $a_{i+1}-a_{i}=b$ for each $1 \leq i \leq k-1$.
Let $\alpha>2$ be a given irrational number. Then $S=\{[n \cdot \alpha]: n \in \mathbb{Z}\}$, is the set of all integers that are equal to $[n \cdot \alpha]$ for some integer $n$.
(a) Prove that for any integer $m \geq 3$, there exist $m$ distinct numbers contained in $S$ which form an arithmetic progression of length $m$.
(b) Prove that there exist no infinite arithmetic progressions contained in $S$.
