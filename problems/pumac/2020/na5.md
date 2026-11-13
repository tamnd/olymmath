---
tag: FETAAS3QDH
kind: problem
appearances:
  - at: pumac/2020/na5
    primary: true
  - at: pumac/2020/nb7
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/PuMaC_Number_Theory_A_2020.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747860
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73237
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263158
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a positive integer $n$ is *divable* if there exist positive integers $1 < a < b < n$ such that, if the base- $a$ representation of $n$ is $\sum_{i=0}^{k_1} a_ia^i$ , and the base- $b$ representation of $n$ is $\sum_{i=0}^{k_2} b_ib^i$ , then for all positive integers $c > b$ , we have that $\sum_{i=0}^{k_2} b_ic^i$ divides $\sum_{i=0}^{k_1} a_ic^i$ . Find the number of non-divable $n$ such that $1 \le n \le 100$ .
