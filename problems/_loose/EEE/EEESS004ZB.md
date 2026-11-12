---
tag: EEESS004ZB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h140594
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35892
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2007
    source: hf-ai-mo-aops
    label: 2007 China Team Selection Test
---
After multiplying out and simplifying polynomial $ (x - 1)(x^2 - 1)(x^3 - 1)\cdots(x^{2007} - 1),$ getting rid of all terms whose powers are greater than $ 2007,$ we acquire a new polynomial $ f(x).$ Find its degree and the coefficient of the term having the highest power. Find the degree of $ f(x) = (1 - x)(1 - x^{2})...(1 - x^{2007})$ $ (mod$ $ x^{2008}).$
