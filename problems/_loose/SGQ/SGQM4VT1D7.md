---
tag: SGQM4VT1D7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190879
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathcal{F}$ be the family of all nonempty finite subsets of $\mathbb{N} \cup\{0\}$. Find all positive real numbers $a$ for which the series

$$
\sum_{A \in \mathcal{F}} \frac{1}{\sum_{k \in A} a^{k}}
$$

is convergent.
