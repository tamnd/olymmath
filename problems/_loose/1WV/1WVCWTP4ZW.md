---
tag: 1WVCWTP4ZW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 27th Philippine MO Qualifying Stage
    url: https://artofproblemsolving.com/community/c6h3489651
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50899
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-ai-mo-aops
    label: 27th Philippine MO Qualifying Stage
---
For a positive integer $ n $, we define $ s_{26}(n) $ to be the sum of the 26th powers of all the positive proper (i.e., not including $ n $) divisors of $ n $. That is,
$$
s_{26}(n) = \sum_{\substack{d \mid n, d \neq n}} d^{26}.
$$

For how many integers $ 2 \leq n \leq 100 $ is $ s_{26}(n) $ odd?
