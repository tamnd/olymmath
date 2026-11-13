---
tag: AKV2A40HR6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1964 All Russian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1858621
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55085
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248443
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1964
    source: hf-ai-mo-aops
    label: 1964 All Russian Mathematical Olympiad
---
Given an arbitrary set of $2k+1$ integers $\{a_1,a_2,...,a_{2k+1}\}$ . We make a new set $$ \{(a_1+a_2)/2, (a_2+a_3)/2, (a_{2k}+a_{2k+1})/2, (a_{2k+1}+a_1)/2\} $$ and a new one, according to the same rule, and so on... Prove that if we obtain integers only, the initial set consisted of equal integers only.
