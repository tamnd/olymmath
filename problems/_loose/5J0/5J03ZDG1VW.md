---
tag: 5J03ZDG1VW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given numbers $a, b \in \mathbb{R}^{*}$ and the function $f: \mathbb{R} \rightarrow \mathbb{R}$,

$$
f(x)= \begin{cases}a x, & x \in \mathbb{Q} \\ b x, & x \in \mathbb{R} \backslash \mathbb{Q}\end{cases}
$$

Prove that $f$ is injective if and only if $f$ is surjective.
