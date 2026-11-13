---
tag: C2J9YK52QD
kind: problem
type: answer
answer: p + 2 for odd p, and 2 for p = 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=243
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia 51st Mongolian National Mathematical Olympiad
---
Let $p$ be a given prime number. We call a set $A$ of positive integers a *p-set* if the cardinality of $A_p$, the set of residues of elements of $A$ modulo $p$, is $p-1$. Determine the smallest value of $n$ such that, for any *p-set* $A$ of $n$ elements, there exists a *p*-element subset of $A$ with sum divisible by $p$.
(Bayarmagnai G.)
