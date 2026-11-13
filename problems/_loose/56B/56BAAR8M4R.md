---
tag: 56BAAR8M4R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216720
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a set and let $\mathcal{P}(X)$ be the set of all subsets of $X$. Let $\mu: \mathcal{P}(X) \to \mathcal{P}(X)$ be a map with the property that $\mu(A \cup B) = \mu(A) \cup \mu(B)$ whenever $A$ and $B$ are disjoint subsets of $X$. Prove that there exists $F \subset X$ such that $\mu(F) = F$.
