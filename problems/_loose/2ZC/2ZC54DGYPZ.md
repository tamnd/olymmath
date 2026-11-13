---
tag: 2ZC54DGYPZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261674
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Andrew generates a finite random sequence $\{a_n\}$ of distinct integers according to the following criteria:

- $a_0 = 1$, $0 < |a_n| < 7$ for all $n$, and $a_i \neq a_j$ for all $i < j$.

- $a_{n+1}$ is selected uniformly at random from the set $\{a_n - 1, a_n + 1, -a_n\}$, conditioned on the above rule. The sequence terminates if no element of the set satisfies the first condition.

For example, if $(a_0, a_1) = (1, 2)$, then $a_2$ would be chosen from the set $\{-2,3\}$, each with probability $\tfrac12$. Determine the probability that there exists an integer $k$ such that $a_k = 6$.
