---
tag: GBWMSTNB9J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240879
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) There is an infinite sequence of $0,1$, like $\dots,a_{-1},a_{0},a_{1},\dots$ (i.e. an element of $\{0,1\}^{\mathbb Z}$). At each step we make a new sequence. There is a function $f$ such that for each $i$, $\text{new }a_{i}=f(a_{i-100},a_{i-99},\dots,a_{i+100})$. This operation is mapping $F: \{0,1\}^{\mathbb Z}\longrightarrow\{0,1\}^{\mathbb Z}$. Prove that if $F$ is 1-1, then it is surjective.
b) Is the statement correct if we have an $f_{i}$ for each $i$?
