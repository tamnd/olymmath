---
tag: G2CHPT8ZMN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246082
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a finite set $A$ of integers, define $s(A)$ as the number of values obtained by adding any two elements of $A$, not necessarily different. Analogously, define $r (A)$ as the number of values obtained by subtracting any two elements of $A$, not necessarily different.
For example, if $A = \{3,1,-1\}$
$\bullet$ The values obtained by adding any two elements of $A$ are $\{6,4,2,0,-2\}$ and so $s (A) = 5$.
$\bullet$ The values obtained by subtracting any two elements of $A$ are $\{4,2,0,-2,-4\}$ and as $r (A) = 5$.
Prove that for each positive integer $n$ there is a finite set $A$ of integers such that $r (A) \ge n s (A)$.
