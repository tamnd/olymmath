---
tag: YS73Q3EHPD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82488
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Invariance of the subgroup generated) Let $(G, *)$ be a group, $S \subseteq G$ a subset of $G$, $x$ an element of $G$, and $s$ an element of $\langle S\rangle$. Show that $\langle S \cup\{x\}\rangle=\langle S \cup\{x * s\}\rangle=\langle S \cup\{s * x\}\rangle$.

Definition 70. (Generating set) Let $(G, *)$ be a group and $S \subseteq G$ a subset of $G$ such that $\langle S\rangle=G$. We say that $S$ is a generating set of $G$ - or that $S$ generates $G$.
