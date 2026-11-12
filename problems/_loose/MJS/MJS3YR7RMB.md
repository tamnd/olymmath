---
tag: MJS3YR7RMB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 BMT
    url: https://artofproblemsolving.com/community/c6h2936476
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2021
    source: hf-ai-mo-aops
    label: 2021 BMT
---
Let $S = {1, 2, 2^2, 2^3, ... , 2^{2021}}$ . Compute the difference between the number of even digits and the number of odd digits across all numbers in $S$ (written as integers in base $10$ with no leading zeros). If E is the exact answer to this question and A is your answer, your score is given by $\max \left(0, \left\lfloor 25 - \frac{1}{2 \cdot 10^8}|E - A|^4\right\rfloor \right)$ .
