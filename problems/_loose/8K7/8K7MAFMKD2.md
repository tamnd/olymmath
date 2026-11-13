---
tag: 8K7MAFMKD2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232561
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $u_1=1,u_2=2,u_3=24,$ and
$u_{n+1}=\frac{6u_n^2 u_{n-2}-8u_nu_{n-1}^2}{u_{n-1}u_{n-2}}, n \geq 3.$
Prove that the elements of the sequence are natural numbers and that $n\mid u_n$ for all $n$.
