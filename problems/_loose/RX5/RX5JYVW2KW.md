---
tag: RX5JYVW2KW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=259830
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Let $a,b,x$ be real numbers, with $a \neq b$ and let $M_n$ denote the $2n x 2n $ matrix whose $(i,j)$ entry $m_{ij}$ is given by
$m_{ij}=x$ if $i=j$,
$m_{ij}=a$ if $i \not= j$ and $i+j$ is even,
$m_{ij}=b$ if $i \not= j$ and $i+j$ is odd.
For example
$ M_2=\begin{vmatrix}x& b& a & b\\ b& x & b &a\\ a
& b& x & b\\ b & a & b & x \end{vmatrix}$.
Express $\lim_{x\to\ 0} \frac{ det M_n}{ (x-a)^{(2n-2)} }$ as a polynomial in $a,b $ and $n$ .
