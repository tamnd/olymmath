---
tag: BV5SFZRF9X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h97483
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35871
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234341
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
Two positive valued sequences $\{ a_{n}\}$ and $\{ b_{n}\}$ satisfy:
(a): $a_{0}=1 \geq a_{1}$ , $a_{n}(b_{n+1}+b_{n-1})=a_{n-1}b_{n-1}+a_{n+1}b_{n+1}$ , $n \geq 1$ .

(b): $\sum_{i=1}^{n}b_{i}\leq n^{\frac{3}{2}}$ , $n \geq 1$ .

Find the general term of $\{ a_{n}\}$ .
