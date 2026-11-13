---
tag: NCD8DW2BSF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82498
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Group and subgroup of permutations) Let $(G, *)$ be a group. Show that $(G, *)$ is isomorphic to a subgroup of $\left(\mathfrak{S}_{G}, \circ\right)$.

Definition 75. (Conjugation) Let $(G, *)$ be a group and $x$ an element of $G$. The map $\varphi_{x}: y \rightarrow x^{-1} * y * x$ is called the conjugation morphism by $x$ - or inner automorphism induced by $x$.
