---
tag: WDHAEF6M6P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3297634
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1990
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=193
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2024
    source: hf-ai-mo-aops
    label: 2024 Mongolian Mathematical Olympiad
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Let $P(x)$ and $Q(x)$ be polynomials with nonnegative coefficients. We denote by $P'(x)$ the derivative of $P(x)$ . Suppose that $P(0)=Q(0)=0$ and $Q(1) \leq 1 \leq P'(0)$ . $(1)$ Prove that $0 \leq Q(x) \leq x \leq P(x)$ for all $0 \leq x \leq 1$ . $(2)$ Prove that $P(Q(x)) \leq Q(P(x))$ for all $0 \leq x \leq 1$ .

*Proposed by Otgonbayar Uuye.*
