---
tag: 5NTW3WEPQD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h462019
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7165
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209284
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2011
    source: hf-ai-mo-aops
    label: 2011 Romania Team Selection Test
---
Given an integer $n\ge 2$ , compute $\sum_{\sigma} \textrm{sgn}(\sigma) n^{\ell(\sigma)}$ , where all $n$ -element permutations are considered, and where $\ell(\sigma)$ is the number of disjoint cycles in the standard decomposition of $\sigma$ .
