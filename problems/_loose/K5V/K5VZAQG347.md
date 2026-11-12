---
tag: K5VZAQG347
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1985 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1889070
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55440
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25588
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1985
    source: hf-ai-mo-aops
    label: 1985 All Soviet Union Mathematical Olympiad
---
If there are four numbers $(a,b,c,d)$ in four registers of the calculating machine, they turn into $(a-b,b-c,c-d,d-a)$ numbers whenever you press the button. Prove that if not all the initial numbers are equal, machine will obtain at least one number more than $1985$ after some number of the operations.
