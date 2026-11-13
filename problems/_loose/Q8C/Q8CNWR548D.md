---
tag: Q8CNWR548D
kind: problem
type: answer
answer: \frac{n!}{(1!)^{k_1}k_1!(2!)^{k_2}k_2!\cdots(n!)^{k_n}k_n!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141273
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If the partition $A_{1}, A_{2}, \cdots, A_{m}$ of an $n$-element set $X$ contains $k_{1}$ singletons, $k_{2}$ pairs, $\cdots \cdots, k_{n}$ $n$-element sets $\left(k_{1}+k_{2}+\cdots+k_{n}=m\right.$, $1 k_{1}+2 k_{2}+\cdots+n k_{n}=n, k_{1}, k_{2}, \cdots, k_{n}$ are non-negative integers $)$, then this partition is called a partition of the form $1^{k_{1}} \cdot 2^{k_{2}} \cdots \cdots \cdot n^{k_{n}}$. Find the number of such partitions.
