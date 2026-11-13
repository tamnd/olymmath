---
tag: EJE9KRBJMX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h81851
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35799
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2003
    source: hf-ai-mo-aops
    label: 2003 China Team Selection Test
---
Let $a_{1},a_{2},...,a_{n}$ be positive real number $(n \geq 2)$ ,not all equal,such that $\sum_{k=1}^n a_{k}^{-2n}=1$ ,prove that:
$\sum_{k=1}^n a_{k}^{2n}-n^2.\sum_{1 \leq i<j \leq n}(\frac{a_{i}}{a_{j}}-\frac{a_{j}}{a_{i}})^2 >n^2$
