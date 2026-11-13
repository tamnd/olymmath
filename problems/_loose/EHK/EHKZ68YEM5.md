---
tag: EHKZ68YEM5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h526394
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9269
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211302
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2013
    source: hf-ai-mo-aops
    label: 2013 China Team Selection Test
  - at: cn-tst
    source: hf-mathnet
    label: China China National Team Selection Test
---
Let $k\ge 2$ be an integer and let $a_1 ,a_2 ,\cdots ,a_n,b_1 ,b_2 ,\cdots ,b_n$ be non-negative real numbers. Prove that$$\left(\frac{n}{n-1}\right)^{n-1}\left(\frac{1}{n} \sum_{i=1}^{n} a_i^2\right)+\left(\frac{1}{n} \sum_{i=1}^{n} b_i\right)^2\ge\prod_{i=1}^{n}(a_i^{2}+b_i^{2})^{\frac{1}{n}}.$$
