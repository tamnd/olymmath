---
tag: NPPZ5WZ6RQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Iran MO (2nd  Round)
    url: https://artofproblemsolving.com/community/c6h3074028
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=786
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204438
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2023
    source: hf-ai-mo-aops
    label: 2023 Iran MO (2nd  Round)
---
We call $(P_n)_{n\in \mathbb{N}}$ an arithmetic sequence with common difference $Q(x)$ if $\forall n: P_{n+1} = P_n + Q$ $\newline$ We have an arithmetic sequence with a common difference $Q(x)$ and the first term $P(x)$ such that $P,Q$ are monic polynomials with integer coefficients and don't share an integer root. Each term of the sequence has at least one integer root. Prove that: $\newline$ a) $P(x)$ is divisible by $Q(x)$ $\newline$ b) $\text{deg}(\frac{P(x)}{Q(x)}) = 1$
