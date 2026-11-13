---
tag: XTAPQF8Y1K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h500637
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8477
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210541
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2012
    source: hf-ai-mo-aops
    label: 2012 Online Math Open Problems
---
Let $c_1,c_2,\ldots,c_{6030}$ be 6030 real numbers. Suppose that for any 6030 real numbers $a_1,a_2,\ldots,a_{6030}$ , there exist 6030 real numbers $\{b_1,b_2,\ldots,b_{6030}\}$ such that $$a_n = \sum_{k=1}^{n} b_{\gcd(k,n)}$$ and $$b_n = \sum_{d\mid n} c_d a_{n/d}$$ for $n=1,2,\ldots,6030$ . Find $c_{6030}$ .

*Victor Wang.*
