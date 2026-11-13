---
tag: 44WGVB2FR5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103831
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $(a, b)$ is a pair of positive integers. Two people, A and B, play the following game: there are two piles of stones with numbers $a$ and $b$ respectively. A starts first, and the two players take turns to take stones. Each time, they either take some stones from one pile (they cannot take none), or take the same number of stones from both piles (they also cannot take none). The player who takes the last stone wins.
$A=\left\{a \mid\right.$ there exists $b \in \mathbf{Z}_{+}, b<a$, such that B has a winning strategy in $(a, b)$ $\}$,
The elements of $A$ are $a_{1}<a_{2}<\cdots$. Prove:
(1) $A$ is an infinite set;
(2) The sequence $\left\{m_{k}\right\}(k \geqslant 1)$:
$$
m_{k}=a_{k+1}-a_{k}\left(k \in \mathbf{Z}_{+}\right)
$$

is not eventually periodic.
