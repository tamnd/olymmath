---
tag: JRQP4PGT5V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920822
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7024
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2011
    source: hf-ai-mo-aops
    label: 2011 Princeton University Math Competition
---
If we define $\otimes(a,b,c)$ by
\begin{align*}
\otimes(a,b,c) = \frac{\max(a,b,c)- \min(a,b,c)}{a+b+c-\min(a,b,c)-\max(a,b,c)},
\end{align*}
compute $\otimes(\otimes(7,1,3),\otimes(-3,-4,2),1)$ .
