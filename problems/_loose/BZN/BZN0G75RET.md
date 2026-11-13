---
tag: BZN0G75RET
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224314
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a set of $ { 2n \choose n } + 1$ real numbers, where $n$ is an positive integer. Prove that there exists a monotone sequence $\{a_i\}_{1\leq i \leq n+2} \subset S$ such that
$$ |x_{i+1} - x_1 | \geq 2 | x_i - x_1 | , $$
for all $i=2,3,\ldots, n+1$.
