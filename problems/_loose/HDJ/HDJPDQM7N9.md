---
tag: HDJPDQM7N9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h286822
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44787
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241025
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/1999
    source: hf-ai-mo-aops
    label: 1999 Irish Math Olympiad
---
The sequence $ u_n$ , $ n=0,1,2,...$ is defined by $ u_0=0, u_1=1$ and for each $ n \ge 1$ , $ u_{n+1}$ is the smallest positive integer greater than $ u_n$ such that $ \{ u_0,u_1,...,u_{n+1} \}$ contains no three elements in arithmetic progression. Find $ u_{100}$ .
