---
tag: RKZD114ZSK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h453971
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6924
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209053
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2011
    source: hf-ai-mo-aops
    label: 2011 Olympic Revenge
---
Let $p$ be a fixed prime. Determine all the integers $m$ , as function of $p$ , such that there exist $a_1, a_2, \ldots, a_p \in \mathbb{Z}$ satisfying
$$m \mid a_1^p + a_2^p + \cdots + a_p^p - (p+1).$$
