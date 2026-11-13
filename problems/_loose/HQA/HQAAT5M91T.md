---
tag: HQAAT5M91T
kind: problem
type: answer
answer: "13"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232409
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of sequences with $2022$ natural numbers $n_1, n_2, n_3, \ldots, n_{2022}$, such that in every sequence:
$\bullet$ $n_{i+1}\geq n_i$
$\bullet$ There is at least one number $i$, such that $n_i=2022$
$\bullet$ For every $(i, j)$ $n_1+n_2+\ldots+n_{2022}-n_i-n_j$ is divisible to both $n_i$ and $n_j$
