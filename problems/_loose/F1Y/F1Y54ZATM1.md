---
tag: F1Y54ZATM1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1219309
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14527
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
Let $\mathbb{Z}_{\ge 0}$ denote the set of nonnegative integers.

Define a function $f:\mathbb{Z}_{\ge 0} \to\mathbb{Z}$ with $f\left(0\right)=1$ and $$ f\left(n\right)=512^{\left\lfloor n/10 \right\rfloor}f\left(\left\lfloor n/10 \right\rfloor\right)$$
for all $n \ge 1$ . Determine the number of nonnegative integers $n$ such that the hexadecimal (base $16$ ) representation of $f\left(n\right)$ contains no more than $2500$ digits.

*Proposed by Tristan Shin*
