---
tag: BQQGX29D0R
kind: problem
type: answer
answer: 1000(2^{n}-1)2^{999n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the set of all $n$-tuples $\left(X_{1}, \ldots, X_{n}\right)$, where $X_{1}, \ldots, X_{n}$ are subsets of $\{1,2, \ldots, 1000\}$, which do not all have to be different, and which can also be empty. For $a=\left(X_{1}, \ldots, X_{n}\right) \in S$ denote

$$
E(a)=\text { number of elements of } X_{1} \cup \ldots \cup X_{n}
$$

Find an explicit expression for the sum

$$
\sum_{a \in S} E(a)
$$
