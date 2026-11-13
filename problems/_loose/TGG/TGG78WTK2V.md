---
tag: TGG78WTK2V
kind: problem
type: answer
answer: 2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231721
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. A *partition * of $n$ is a multiset (set with repeated elements) whose sum of elements is $n$. For example, the partitions of $3$ are $\{1, 1, 1\}, \{1, 2\}$ and $\{3\}$. Each partition of $n$ is written as a non-descending sequence. For example, for $n = 3$, the list is $(1, 1, 1)$, $(1, 2)$ and $(3)$. For each sequence $x = (x_1, x_2, ..., x_k)$, define $f(x)=\prod_{i=1}^{k-1} {x_{i+1} \choose x_ i}$ . Furthermore, the $f$ of partition $\{n\}$ is $f((n)) = 1$. Prove that the sum of all $f$'s in the list is $2^{n-1}.$
