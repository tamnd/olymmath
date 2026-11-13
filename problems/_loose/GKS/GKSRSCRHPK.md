---
tag: GKSRSCRHPK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Peru Iberoamerican Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3108836
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50505
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246139
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-ibero-tst/2021
    source: hf-ai-mo-aops
    label: 2021 Peru Iberoamerican Team Selection Test
---
We say that a set $S$ of positive integers is special when there exists a function $f : \mathbb{N}\to \mathbb{N}$ satisfying that: $\bullet$ $f(k)\in S, \forall k\in\mathbb{N}$ $\bullet$ No integer $k$ with $2\le k \le 2021$ can be written as $\frac{af(a)}{bf(b)}$ with $a,b\in \mathbb{N}$ Find the smallest positive integer $n$ such that the set $S = \{ 1, 2021, 2021^2, \ldots , 2021^n \}$ is special or prove that no such integer exists.
Note: $\mathbb{N}$ represents the set $\{ 1, 2, 3, \ldots \}$
