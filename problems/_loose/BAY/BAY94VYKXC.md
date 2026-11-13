---
tag: BAY94VYKXC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1961 All-Soviet Union Olympiad
    url: https://artofproblemsolving.com/community/c6h1124395
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55032
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248390
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1961
    source: hf-ai-mo-aops
    label: 1961 All-Soviet Union Olympiad
---
Consider a quartet of positive numbers $(a,b,c,d)$ . In one step, we transform it to $(ab,bc,cd,da)$ . Prove that you can never obtain the initial set if neither of $a,b,c,d$ is $1$ .
