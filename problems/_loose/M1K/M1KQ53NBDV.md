---
tag: M1KQ53NBDV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1980 IMO
    url: https://artofproblemsolving.com/community/c6h5560
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23561
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imo/1980
    source: hf-ai-mo-aops
    label: 1980 IMO
---
Define the numbers $a_0, a_1, \ldots, a_n$ in the following way:

$$ a_0 = \frac{1}{2}, a_{k+1} = a_k + \frac{a^2_k}{n} (n > 1, k = 0,1, \ldots, n-1). $$

Prove that $$ 1 - \frac{1}{n} < a_n < 1.$$
