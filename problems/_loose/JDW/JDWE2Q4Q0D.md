---
tag: JDWE2Q4Q0D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242437
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an odd prime $p$, find all functions $f:Z \rightarrow Z$ satisfying the following two conditions:

(i) $f(m)=f(n)$ for all $m,n \in Z$ such that $m\equiv n\pmod p$;
(ii) $f(mn)=f(m)f(n)$ for all $m,n \in Z$.
