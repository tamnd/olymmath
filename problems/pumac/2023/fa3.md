---
tag: A1XRDQX0EG
kind: problem
appearances:
  - at: pumac/2023/fa3
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Indiv_Finals_A_2023.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3234681
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73412
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268572
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(X)$ be a monic irreducible polynomial over $\mathbb{Z}$ ; therefore, by Gauss's Lemma, $f$ is also irreducible over $\mathbb{Q}$ (you may assume this). Moreover, assume $f(X) \mid f\left(X^2+n\right)$ where $n$ is an integer such that $n \notin\{-1,0,1\}$ . Show that $n^2 \nmid f(0)$ .
