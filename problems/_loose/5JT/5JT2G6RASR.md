---
tag: 5JT2G6RASR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h42562
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35683
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1993
    source: hf-ai-mo-aops
    label: 1993 China Team Selection Test
---
For all primes $p \geq 3,$ define $F(p) = \sum^{\frac{p-1}{2}}_{k=1}k^{120}$ and $f(p) = \frac{1}{2} - \left\{ \frac{F(p)}{p} \right\}$ , where $\{x\} = x - [x],$ find the value of $f(p).$
