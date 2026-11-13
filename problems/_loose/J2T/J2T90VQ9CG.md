---
tag: J2T90VQ9CG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h598538
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61141
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2014
    source: hf-ai-mo-aops
    label: 2014 Taiwan TST Round 2
---
Let $a_i > 0$ for $i=1,2,\dots,n$ and suppose $a_1 + a_2 + \dots + a_n = 1$ . Prove that for any positive integer $k$ ,
$$ \left( a_1^k + \frac{1}{a_1^k} \right) \left( a_2^k + \frac{1}{a_2^k} \right) \dots \left( a_n^k + \frac{1}{a_n^k} \right) \ge \left( n^k + \frac{1}{n^k} \right)^n. $$
