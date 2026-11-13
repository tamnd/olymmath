---
tag: AMVT3MYE10
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247141
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ f_1,f_2,f_3,f_4 $ be four polynomials with real coefficients, having the property that
$$ f_1 (1) =f_2 (0), f_2 (1) =f_3 (0), f_3 (1) =f_4 (0), f_4 (1) =f_1 (0) . $$
Prove that there exists a polynomial $ f\in\mathbb{R}[X,Y] $ such that
$$ f(X,0)=f_1(X), f(1,Y) =f_2(Y) , f(1-X,1) =f_3(X), f(0,1-Y)=f_4(Y) . $$
