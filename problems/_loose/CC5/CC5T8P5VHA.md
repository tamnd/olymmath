---
tag: CC5T8P5VHA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h97508
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35888
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234356
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
Let $k$ be an odd number that is greater than or equal to $3$ . Prove that there exists a $k^{th}$ -degree integer-valued polynomial with non-integer-coefficients that has the following properties:
(1) $f(0)=0$ and $f(1)=1$ ; and.
(2) There exist infinitely many positive integers $n$ so that if the following equation: $$ n= f(x_1)+\cdots+f(x_s), $$ has integer solutions $x_1, x_2, \dots, x_s$ , then $s \geq 2^k-1$ .
