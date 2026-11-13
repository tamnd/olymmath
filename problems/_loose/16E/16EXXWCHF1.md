---
tag: 16EXXWCHF1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245232
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Denote by $\mathbb{N}$ the set of positive integers. Find all functions $f:\mathbb{N} \rightarrow \mathbb{N}$ such that:

**•** For all positive integers $a> 2023^{2023}$ it holds that $f(a) \leq a$.
**•** $\frac{a^2f(b)+b^2f(a)}{f(a)+f(b)}$ is a positive integer for all $a,b \in \mathbb{N}$.

*Proposed by Nikola Velov*
