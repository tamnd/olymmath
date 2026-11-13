---
tag: 4ZHK1XVWTW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h53037
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42206
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238791
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2004
    source: hf-ai-mo-aops
    label: 2004 India IMO Training Camp
---
Given a permutation $\sigma = (a_1,a_2,a_3,...a_n)$ of $(1,2,3,...n)$ , an ordered pair $(a_j,a_k)$ is called an inversion of $\sigma$ if $a \leq j < k \leq n$ and $a_j > a_k$ . Let $m(\sigma)$ denote the no. of inversions of the permutation $\sigma$ . Find the average of $m(\sigma)$ as $\sigma$ varies over all permutations.
