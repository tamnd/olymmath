---
tag: TCMCMT2W6V
kind: problem
type: answer
answer: '\{f(r, r) : r \in S\} = S'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239364
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S=\{1,2,\cdots ,n\}$ where $n$ is an odd integer. Let $f$ be a function defined on $\{(i,j): i\in S, j \in S\}$ taking values in $S$ such that
(i) $f(s,r)=f(r,s)$ for all $r,s \in S$
(ii) $\{f(r,s): s\in S\}=S$ for all $r\in S$

Show that $\{f(r,r): r\in S\}=S$
