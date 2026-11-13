---
tag: 1DTWHNM1QF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101383
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The partition problem of positive integers:
$$
n=n_{1}+n_{2}+\cdots+n_{k}, n_{i}>0,1 \leqslant i \leqslant k
$$

is called a $k$-partition of the positive integer $n$. If any permutation of $n_{i}$ is considered as the same partition, such a partition is called an unordered partition; otherwise, it is called an ordered partition.

For ordered partitions, it is known that there are $\mathrm{C}_{n-1}^{k-1}$ kinds. Now we discuss unordered partitions, which for simplicity, we will still refer to as partitions. Let $B(n)$ denote the number of all partitions of $n$, $B_{k}(n)$ denote the number of partitions of $n$ where each part does not exceed $k$, and $B_{H}(n)$ denote the number of partitions of $n$ where each part belongs to $H$. Then their corresponding generating functions are:
(1) $\sum_{n=0}^{\infty} B_{k}(n) x^{n}=\frac{1}{(1-x)\left(1-x^{2}\right) \cdots\left(1-x^{k}\right)}$;
(2) $\sum_{n=0}^{\infty} B_{H}(n) x^{n}=\prod_{j \in H} \frac{1}{1-x^{j}}$;
(3) $\sum_{n=0}^{\infty} B(n) x^{n}=\prod_{j=1}^{\infty} \frac{1}{1-x^{j}}$.
