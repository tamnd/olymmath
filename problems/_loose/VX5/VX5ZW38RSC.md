---
tag: VX5ZW38RSC
kind: problem
type: answer
answer: 2n^3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=420
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k, n \in \mathbb{N}^*$ and let $A$ be an arbitrary set of $2n$ positive integers. For each $a \in A$, denote by $p_a$ the number of elements in the set $P_a = \{b \in A \mid b - a \equiv k \pmod{2k}\}$. Determine the maximum possible value of the sum $E_A = \sum_{a \in A} p_a^2$, when $A$ runs over all subsets of size $2n$ of $\mathbb{N}^*$.
Cristi Săvescu
