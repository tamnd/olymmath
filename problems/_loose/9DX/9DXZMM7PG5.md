---
tag: 9DXZMM7PG5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132018
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a pair of coprime positive integers $p>q$, find all real numbers $c, d$ such that the sets
$$
A=\left\{\left.\left[\frac{n p}{q}\right] \right\rvert n \in \mathbf{N}\right\}, B=\{[c n+d] \mid n \in \mathbf{N}\}
$$

satisfy $A \cap B=\varnothing, A \cup B=\mathbf{N}$, where $\mathbf{N}$ denotes the set of natural numbers.
