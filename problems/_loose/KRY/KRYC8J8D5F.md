---
tag: KRYC8J8D5F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266557
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fix a positive integer $n$. Let $a_1, a_2, \ldots$ be a sequence of positive integers such that for all $1 \leq j \leq n$, $a_j=j$, and for all $j>n$, $a_j$ is the largest value of $\min(a_i,a_{j-i})$ among $i=1,2, \ldots j-1$. For example, if $n=3$, we have $a_1=1$, $a_2=2$, $a_3=3$, and $a_4=2$ since $\min(a_1,a_3)=1$, $\min(a_2,a_2)=2$, and $\min(a_3,a_1)=1$. We will determine the values of $a_k$ for sufficiently large $k$.

(a) Show that $a_i \in \{1,2,3, \ldots n\}$ for all $i$.

(b) Show that if $a_x \geq n-1$ and $a_y \geq n-1$, $a_{x+y} \geq n-1$.

(c) Show that for some positive integer $N$, $a_k \in \{n-1,n\}$ for all $k \geq N$.

(d) Show that $a_k = n$ if and only if $n \mid k$.
