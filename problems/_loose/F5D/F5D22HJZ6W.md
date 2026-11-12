---
tag: F5D22HJZ6W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2055677
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19282
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
Let $S$ and $T$ be non-empty, finite sets of positive integers. We say that $a\in\mathbb{N}$ is \emph{good} for $b\in\mathbb{N}$ if $a\geq\frac{b}{2}+7$ . We say that an ordered pair $\left(a,b\right)\in S\times T$ is \emph{satisfiable} if $a$ and $b$ are good for each other.

A subset $R$ of $S$ is said to be \emph{unacceptable} if there are less than $\left|R\right|$ elements $b$ of $T$ with the property that there exists $a \in R$ such that $\left(a,b\right)$ is satisfiable. If there are no unacceptable subsets of $S$ , and $S$ contains the elements $14$ , $20$ , $16$ , $32$ , $23$ , and $31$ , compute the smallest possible sum of elements of $T$ given that $\left|T\right|\geq20$ .

*Proposed by Tristan Shin*
