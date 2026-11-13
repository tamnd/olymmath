---
tag: BNDK58YC1B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h517884
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9940
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211936
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
The infinite geometric series of positive reals $a_1, a_2, \dots$ satisfies
$$ 1 = \sum_{n=1}^\infty a_n = -\frac{1}{2013} + \sum_{n=1}^{\infty} \text{GM}(a_1, a_2, \dots, a_n) = \frac{1}{N} + a_1 $$
where $\text{GM}(x_1, x_2, \dots, x_k) = \sqrt[k]{x_1x_2\cdots x_k}$ denotes the geometric mean. Compute $N$ .

*Proposed by Aaron Lin*
