---
tag: TFNHG9C8YS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239469
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the set $A=\{1,2,3,4,5,6,7,8,9\}$.A partition $\Pi $ of $A$ is collection of disjoint sets whose union is $A$. For example, $\Pi_1=\{\{1,2\},\{3,4,5\},\{6,7,8,9\}\}$ and $\Pi _2 =\{\{1\},\{2,5\},\{3,7\},\{4,5,6,7,8,9\}\}$ can be considered as partitions of $A$. For, each $\Pi$ partition ,we consider the function $\pi$ defined on the elements of$A$. $\pi (x)$ denotes the cardinality of the subset in $\Pi$ which contains $x$. For, example in case of $\Pi_1$ , $\pi_1(1)=\pi_1(2)=2$, $\pi_1(3)=\pi_1(4)=\pi_1 (5)=3$, and $\pi_1(6)=\pi_1(7)=\pi_1(8)=\pi_1(9)=4$. For $\Pi_2$ we have $\pi_2(1)=1$, $\pi_2(2)=\pi_2(5)=2$, $\pi_2(3)=\pi_2(7)=2$ and $\pi_2(4)=\pi_2(6)=\pi_2(8)=\pi_2(9)=4$ Given any two partitions $\Pi$ and $\Pi '$, show that there are two numbers $x$ and $y$ in $A$, such that $\pi (x)= \pi '(x)$ and $ \pi (y)= \pi'(y)$.[**Hint:** Consider the case where there is a block of size greater than or equal to 4 in a partition and the alternative case]
