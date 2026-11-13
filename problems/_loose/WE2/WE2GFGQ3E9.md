---
tag: WE2GFGQ3E9
kind: problem
type: answer
answer: 3n^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242581
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The permutation $\sigma$ consisting of four words $A,B,C,D$ has $f_{AB}(\sigma)$, the sum of the number of $B$ placed rightside of every $A$. We can define $f_{BC}(\sigma)$,$f_{CD}(\sigma)$,$f_{DA}(\sigma)$ as the same way too.
For example, $\sigma=ACBDBACDCBAD$, $f_{AB}(\sigma)=3+1+0=4$, $f_{BC}(\sigma)=4$,$f_{CD}(\sigma)=6$, $f_{DA}(\sigma)=3$
Find the maximal value of $f_{AB}(\sigma)+f_{BC}(\sigma)+f_{CD}(\sigma)+f_{DA}(\sigma)$, when $\sigma$ consists of $2020$ letters for each $A,B,C,D$
