---
tag: 5P469CTVWB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3040248
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74090
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2022
    source: hf-ai-mo-aops
    label: 2022 Stanford Mathematics Tournament
---
Let $M=\{0,1,2,\dots,2022\}$ and let $f:M\times M\to M$ such that for any $a,b\in M$ ,
$$f(a,f(b,a))=b$$
and $f(x,x)\neq x$ for each $x\in M$ . How many possible functions $f$ are there $\pmod{1000}$ ?
