---
tag: 8HGC5ZGBGW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h5904
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42223
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2004
    source: hf-ai-mo-aops
    label: 2004 India IMO Training Camp
---
Find all primes $p \geq 3$ with the following property: for any prime $q<p$ , the number
$$
p - \Big\lfloor \frac{p}{q} \Big\rfloor q
$$
is squarefree (i.e. is not divisible by the square of a prime).
