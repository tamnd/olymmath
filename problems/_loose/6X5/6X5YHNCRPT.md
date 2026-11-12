---
tag: 6X5YHNCRPT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h49887
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=53934
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/1997
    source: hf-ai-mo-aops
    label: 1997 Romania National Olympiad
---
Suppose that $(f_n)_{n\in N}$ be the sequence from all functions $f_n:[0,1]\rightarrow \mathbb{R^+}$ s.t. $f_0$ be the continuous function and $\forall x\in [0,1] , \forall n\in \mathbb {N} , f_{n+1}(x)=\int_0^x \frac {1}{1+f_n (t)}dt$ . Prove that for every $x\in [0,1]$ the sequence of $(f_n(x))_{n\in N}$ be the convergent sequence and calculate the limitation.
