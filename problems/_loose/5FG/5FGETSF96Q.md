---
tag: 5FGETSF96Q
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\{a_{n}\}_{n\geq 0}$ is defined by $a_{0}=20,a_{1}=100,a_{n+2}=4a_{n+1}+5a_{n}+20(n=0,1,2,...)$. Find the smallest positive integer $h$ satisfying $1998|a_{n+h}-a_{n}\forall n=0,1,2,...$
