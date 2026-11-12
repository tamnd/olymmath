---
tag: DQZ0GS3SNC
kind: problem
type: answer
answer: 4x^{3}+2x^{2}-2x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=43449
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $T_{0}=1, T_{1}=x, T_{k+1}=2 x T_{k}-T_{k-1}$, where $k \in N$. Write in standard form $T_{5}$ and $T_{0}+T_{1}+T_{2}+T_{3}$.

The polynomials mentioned above are known as "Chebyshev polynomials" (1821 - 1894). The discovery of these polynomials and a series of their remarkable properties was prompted by the great Russian mathematician's study of a linkage mechanism called the "Watt's parallelogram" (see, for example, the journal "Kvant" for 1971, issue 5, article by N. N. Kolesnikov "Pafnuty Lvovich Chebyshev").
