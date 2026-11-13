---
tag: V90YNJ6W9B
kind: problem
type: answer
answer: 2^{2023} + 2^{2022}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242605
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest positive integer $N$ such that there are no different sets $A, B$ that satisfy the following conditions. (Here, $N$ is not a power of $2$. That is, $N \neq 1, 2^1, 2^2, \dots$.)

- $A, B \subseteq \{1, 2^1, 2^2, 2^3, \dots, 2^{2023}\} \cup \{ N \}$

- $|A| = |B| \geq 1$

- Sum of elements in $A$ and sum of elements in $B$ are equal.
