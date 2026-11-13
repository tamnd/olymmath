---
tag: 97NNQT9MQ9
kind: problem
type: answer
answer: '|A_1| = |A_4|'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221847
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p\ge 5$ be a prime number. Consider the function given by the formula $$f (x_1,..., x_p) = x_1 + 2x_2 +... + px_p.$$
Let $A_k$ denote the set of all these permutations $(a_1,..., a_p)$ of the set $\{1,..., p\}$, for integer number $f (a_1,..., a_p) - k$ is divisible by $p$ and $a_i \ne i$ for all $i \in \{1,..., p\}$. Prove that the sets $A_1$ and $A_4$ have the same number of elements.
