---
tag: 1A1C28FKSP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2834903
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73315
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2021
    source: hf-ai-mo-aops
    label: 2021 Princeton University Math Competition
---
Consider the following expression $$ S = \log_2 \left( \sum^{2019}_{k=1}\sum^{2020}_{j=2}\log_{2^{1/k}} (j) \log_{j^2} \left(\sin \frac{\pi k}{2020}\right) \right). $$ Find the smallest integer $n$ which is bigger than $S$ (i.e. find $\lceil S \rceil$ ).
