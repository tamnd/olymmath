---
tag: E7SPEF2TZC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213063
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of sets $\mathcal{F}$ of subsets of the set $\{1,\ldots,2014\}$ such that:

a) For any subsets $S_1,S_2 \in \mathcal{F}, S_1 \cap S_2 \in \mathcal{F}$.
b) If $S \in \mathcal{F}$, $T \subseteq \{1,\ldots,2014\}$, and $S \subseteq T$, then $T \in \mathcal{F}$.
