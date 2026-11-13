---
tag: HTNH62WZQJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2300925
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54914
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230358
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2016
    source: hf-ai-mo-aops
    label: 2016 239 Open Mathematical Olympiad
---
A finite family of finite sets $F$ is given, satisfying two conditions:
(i) if $A, B \in F$ , then $A \cup B \in F$ ;
(ii) if $A \in F$ , then the number of elements $| A |$ is not a multiple of $3$ .
Prove that you can specify at most two elements so that every set of the family $F$ contains at least one of them.
