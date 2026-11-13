---
tag: 6TDRP4JKMP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261622
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the minimum positive real number $\lambda$ such that for any two squares $A,B$ satisfying $\text{Area}(A) + \text{Area}(B)=1$, there always exists some rectangle $C$ of area $\lambda$, such that $A,B$ can be put inside $C$ and satisfy the following two constraints:

1. $A,B$ are non-overlapping;
2. the sides of $A$ and $B$ are parallel to some side of $C$.

$\lambda$ can be written as $\frac{\sqrt{m}+n}{p}$ for positive integers $m$, $n$, and $p$ where $n$ and $p$ are relatively prime. Find $m+n+p$.
