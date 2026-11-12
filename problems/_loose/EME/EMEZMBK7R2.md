---
tag: EMEZMBK7R2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8635
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ and $B$ be some numerical sets, and the set $C=\{a+b \mid a \in A, b \in B\}$ represents their sum. (In other words, the set $C$ consists of all possible sums of elements from sets $A$ and $B$. For example, if $A=\{0,1,2\}, B=\{1,2\}$, then $C=\{1,2,3,4\}$.) It is known that $C=\left\{0,1,2, \ldots, 2^{2828}\right\}$, and the maximum element of set $A$ is

$$
\max A=(\sqrt{2}-1)^{2020}+(\sqrt{2}+1)^{2020}
$$

Prove or disprove the following statements: 1) the sets $A$ and $B$ contain a finite number of elements; 2) all elements of sets $A$ and $B$ are integers; 3) $\max B \geq 2$.
