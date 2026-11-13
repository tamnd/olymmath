---
tag: H9PNE2AJBR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=108
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Let $f_1 : \mathbb{N} \to \mathbb{N}$ be a function. Function $f_2$ is constructed from $f_1$ such that for each $k \in \mathbb{N}$, $f_2(k)$ is the number of times $k$ has appeared in the range of $f_1$, i.e. $f_2(k)$ is the number of natural numbers $n$ for which $f_1(n) = k$.
Suppose that the range of $f_1$ is such that $f_2$ can be defined over all natural numbers, so no number appears in the range of $f_1$ an infinite or zero number of times. Similarly, function $f_3$ can be constructed from function $f_2$ and consequently for each natural number $i$, function $f_{i+1}$ can be constructed from function $f_i$.

a) Prove that for each natural number $T$, there exists a function $f_1$ such that for each natural number $i$, $f_i$ is definable and also the sequence $f_1, f_2, f_3, \dots$ is periodic with period $T$, i.e. $T$ is the smallest number such that $f_{T+1} = f_1$.

b) Does there exist a function $f_1$ such that for each natural number $i$, $f_i$ is definable and these functions are mutually unequal?
