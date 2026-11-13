---
tag: JZ6G8QNXFK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80220
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(a_{n}\right)_{n \in \mathbb{N}^{*}}$ be a sequence of integers. We say that $\left(a_{n}\right)_{n \in \mathbb{N}^{*}}$ is a permutation of $\mathbb{N}^{*}$ if for every $m \in \mathbb{N}^{*}$, there exists a unique $n \in \mathbb{N}^{*}$ such that $a_{n}=m$. Show that there exists a sequence $\left(P_{i}\right)_{i \in \mathbb{N}^{*}}=$ $\left(\left(a_{i, j}\right)_{j \in \mathbb{N}^{*}}\right)_{i \in \mathbb{N}^{*}}$ of permutations of $\mathbb{N}^{*}$ satisfying for all $k \in \mathbb{N}^{*}$ and all $1 \leqslant i_{1}<i_{2}:$

$$
S_{k}\left(P_{i_{1}}\right) \mid S_{k}\left(P_{i_{2}}\right)
$$

where $S_{k}\left(P_{i}\right)$ denotes the sum of the first $k$ elements of $P_{i}: S_{k}\left(P_{i}\right)=\sum_{j=1}^{k} a_{i, j}$.
