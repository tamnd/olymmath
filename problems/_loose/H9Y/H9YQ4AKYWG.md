---
tag: H9YQ4AKYWG
kind: problem
type: answer
answer: P_{k}=\sum_{=1}^{r}\mathrm{C}_{k--1}^{-1}\mathrm{C}_{n-k+1}^{}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114326
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a non-empty integer set $A$, if it satisfies
$$
a \in A, a-1 \notin A, a+1 \notin A,
$$

then $a$ is called an isolated element of set $A$. Question: For the set
$$
M=\{1,2, \cdots, n\}(n \geqslant 3)
$$

how many $k(k \geqslant 3)$-element subsets of $M$ have no isolated elements?
