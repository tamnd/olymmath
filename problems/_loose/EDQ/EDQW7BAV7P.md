---
tag: EDQW7BAV7P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242716
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n$ is a natural number larger than $3$ and denote all positive coprime numbers with $n$ as $1= b_1 < b_2 < \cdots b_k$. For a positive integer $m$ which is larger than $3$ and is coprime with $n$, let $A$ be the set of tuples $(a_1,a_2, \cdots a_k)$ satisfying the condition.
$$\textbf{Condition}: \text{For all integers } i, 0 \le a_i < m \text{ and } a_1b_1 + a_2b_2 + \cdots a_kb_k \text{ is a mutiple of } n$$
For elements of $A$, show that the difference of number of elements such that $a_1 = 1$ and the number of elements such that $a_2 = 2$ maximum $1$
