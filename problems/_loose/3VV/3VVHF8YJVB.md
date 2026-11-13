---
tag: 3VVHF8YJVB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213666
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathbb{A}$ be the least subset of finite sequences of nonnegative integers that satisfies the following two properties:

-$(0,0) \in \mathbb{A}$
- If $(a_1,\ldots,a_n)\in \mathbb{A}$ then
$(a_1,\ldots,a_{i-2},a_{i-1}+1,1,a_{i}+1,a_{i+1},\ldots,a_n)\in \mathbb{A}$ for all $i\in \{2,\ldots,n\}$.

For each $n\geq 2$, let $\mathbb{B}(n)$ be the set of sequences in $\mathbb{A}$ with $n$ terms. Find the number of elements of $\mathbb{B}$.
