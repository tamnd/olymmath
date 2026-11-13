---
tag: 9747RXJKSZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Kosovo National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2468476
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20228
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221748
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: xk-mo/2021
    source: hf-ai-mo-aops
    label: 2021 Kosovo National Mathematical Olympiad
---
Let $P(x)$ be a polynomial with integer coefficients. We will denote the set of all prime numbers by $\mathbb P$ . Show that the set $\mathbb S := \{p\in\mathbb P : \exists\text{ }n \text{ s.t. }p\mid P(n)\}$ is finite if and only if $P(x)$ is a non-zero constant polynomial.
