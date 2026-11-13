---
tag: RYBQ5HM0Y3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h38445
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35724
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2000
    source: hf-ai-mo-aops
    label: 2000 China Team Selection Test
---
Let $ABC$ be a triangle such that $AB = AC$ . Let $D,E$ be points on $AB,AC$ respectively such that $DE = AC$ . Let $DE$ meet the circumcircle of triangle $ABC$ at point $T$ . Let $P$ be a point on $AT$ . Prove that $PD + PE = AT$ if and only if $P$ lies on the circumcircle of triangle $ADE$ .
