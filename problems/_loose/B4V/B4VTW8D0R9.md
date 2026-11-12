---
tag: B4VTW8D0R9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1988 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2565503
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39077
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1988
    source: hf-ai-mo-aops
    label: 1988 French Mathematical Olympiad
---
Let us consider a matrix $T$ with n rows denoted $1,\ldots,n$ and $p$ columns $1,\ldots,p$ . Its entries $a_{ik}~(1\le i\le n,1\le k\le p)$ are integers such that $1\le a_{ik}\le N$ , where $N$ is a given natural number. Let $E_i$ be the set of numbers that appear on the $i$ -th row. Answer question (a) or (b).

(a) Assume $T$ satisfies the following conditions: $(1)$ $E_i$ has exactly $p$ elements for each $i$ , and $(2)$ all $E_i$ 's are mutually distinct. Let $m$ be the smallest value of $N$ that permits a construction of such an $n\times p$ table $T$ .
i. Compute $m$ if $n=p+1$ .
ii. Compute $m$ if $n=10^{30}$ and $p=1998$ .
iii. Determine $\lim_{n\to\infty}\frac{m^p}n$ , where $p$ is fixed.

(b) Assume $T$ satisfies the following conditions instead: $(1)$ $p=n$ , $(2)$ whenever $i,k$ are integers with $i+k\le n$ , the number $a_{ik}$ is not in the set $E_{i+k}$ .
i. Prove that all $E_i$ 's are mutually distinct.
ii. Prove that if $n\ge2^q$ for some integer $q>0$ , then $N\ge q+1$ .
iii. Let $n=2^r-1$ for some integer $r>0$ . Prove that $N\ge r$ and show that there is such a table with $N=r$ .
