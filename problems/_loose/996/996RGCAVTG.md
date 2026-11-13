---
tag: 996RGCAVTG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140802
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(A, \leqslant)$ be a quasi-order. For a subset $X \subseteq A$, denote
$\operatorname{Forb}_{\leqslant}(X):=\{a \in A \mid$ for all $x \in X$ we have $a \neq x\}$.
Prove: $\leqslant$ is a well-quasi-order on $A$ if and only if every subset $B \subseteq A$ that is closed under $\geqslant$ (i.e., $x \leqslant y \in B \Rightarrow x \in B$) can be written in the form $B=\operatorname{Forb}_{\leqslant}(X)$, where $X$ is a finite set.
