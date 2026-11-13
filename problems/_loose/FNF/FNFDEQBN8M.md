---
tag: FNFDEQBN8M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239299
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer and $S = \{ m \mid 2^n \le m < 2^{n+1} \}$. We call a pair of non-negative integers $(a, b)$ *fancy* if $a + b$ is in $S$ and is a palindrome in binary. Find the number of *fancy* pairs $(a, b)$.
