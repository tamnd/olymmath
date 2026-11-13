---
tag: 8AAPFZGFJA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240856
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The bell number $b_n$ is the number of ways to partition the set $\{1,2,\ldots,n\}$. For example $b_3=5$. Find a recurrence for $b_n$ and show that $b_n=e^{-1}\sum_{k\geq 0} \frac{k^n}{k!}$. Using a combinatorial proof show that the number of ways to partition $\{1,2,\ldots,n\}$, such that now two consecutive numbers are in the same block, is $b_{n-1}$.
