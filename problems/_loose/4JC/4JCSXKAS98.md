---
tag: 4JCSXKAS98
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h365405
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4756
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206923
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2010
    source: hf-ai-mo-aops
    label: 2010 China Team Selection Test
---
Fine all positive integers $m,n\geq 2$ , such that
(1) $m+1$ is a prime number of type $4k-1$ ;
(2) there is a (positive) prime number $p$ and nonnegative integer $a$ , such that
$$\frac{m^{2^n-1}-1}{m-1}=m^n+p^a.$$
