---
tag: A4BHGJ84EY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1896487
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17891
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219466
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2019
    source: hf-ai-mo-aops
    label: 2019 Iran MO (3rd Round)
---
Let $a,m$ be positive integers such that $Ord_m (a)$ is odd and for any integers $x,y$ so that

1. $xy \equiv a \pmod m$ 2. $Ord_m(x) \le Ord_m(a)$ 3. $Ord_m(y) \le Ord_m(a)$ We have either $Ord_m(x)|Ord_m(a)$ or $Ord_m(y)|Ord_m(a)$ .prove that $Ord_m(a)$ contains at most one prime factor.
