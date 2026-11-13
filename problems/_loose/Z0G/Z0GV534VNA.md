---
tag: Z0GV534VNA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241859
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m\geq 3$ be an odd integer and $n\geq 3$ be an integer. For each integer $i$ with $1\leq i\leq m$, let $a_{i,1},a_{i,2},\dots,a_{i,n}$ be a permutation of $1,2,\dots,n$.
The chairman and $m$ team leaders (team leader $1,$ team leader $2,\dots,$ team leader $m$) have gathered to hold the jury meeting to choose the problems for this year's IMO. There are $n$ shortlisted problems (problem $1,$ problem $2,\dots,$ problem $n$) submitted to the meeting. Each team leader has a positive integer score of impression between $1$ and $n$ for each problem, and initially team leader $i$ has a score of $a_{i,j}$ for problem $j$. The chairman can repeatedly perform the following operation:

Choose an integer $i$ with $1\leq i\leq m$ and integers $j,k$ with $1\leq j,k\leq n$ such that the difference between the scores of problem $j$ and problem $k$ for team leader $i$ is $1$, and swap the scores of problem $j$ and problem $k$ for team leader $i$.

Regardless of the $mn$ integers $a_{i,j}$ ($1\leq i\leq m$, $1\leq j\leq n$), find the minimum non-negative integer $L$ such that the chairman can make the following condition true by performing the operation at most $L$ times:

For any two distinct integers $x$ and $y$ with $1\leq x,y\leq n$, there exists a sequence of integers $p_1,p_2,\dots,p_s$ with $s\geq 2$ such that $p_1=x$, $p_s=y$, and each $p_i$ with $1\leq i\leq s$ is an integer between $1$ and $n$, and for all integers $t$ with $1\leq t\leq s-1$, the number of team leaders who prefer problem $p_t$ to problem $p_{t+1}$ is at least $\frac{m+1}{2}$.
