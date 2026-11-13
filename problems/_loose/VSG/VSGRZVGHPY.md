---
tag: VSGRZVGHPY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231727
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 1$ be an integer. For each subset $S \subset \{1, 2, \ldots , 3n\}$, let $f(S)$ be the sum of the elements of $S$, with $f(\emptyset) = 0$. Determine, as a function of $n$, the sum $$\sum_{\mathclap{\substack{S \subset \{1,2,\ldots,3n\}\\
3 \mid f(S)}}} f(S)$$
where $S$ runs through all subsets of $\{1, 2,\ldots, 3n\}$ such that $f(S)$ is a multiple of $3$.
