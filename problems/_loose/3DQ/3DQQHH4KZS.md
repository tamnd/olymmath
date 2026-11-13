---
tag: 3DQQHH4KZS
kind: problem
type: answer
answer: "384"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119279
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Set $A=\{0,1,2,3,4,5,6,7\}$, how many mappings $f$ from $A$ to $A$ satisfy the following conditions (1) and (2)?
(1) $i, j \in A, i \neq j$, then $f(i) \neq f(j)$;
(2) $i, j \in A, i+j=7$, then $f(i)+f(j)=7$.
