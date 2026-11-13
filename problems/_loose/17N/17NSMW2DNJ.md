---
tag: 17NSMW2DNJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h97496
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35878
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234348
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2006
    source: hf-ai-mo-aops
    label: 2006 China Team Selection Test
---
Find all second degree polynomial $d(x)=x^{2}+ax+b$ with integer coefficients, so that there exists an integer coefficient polynomial $p(x)$ and a non-zero integer coefficient polynomial $q(x)$ that satisfy: $$\left( p(x) \right)^{2}-d(x) \left( q(x) \right)^{2}=1, \forall x \in \mathbb R.$$
