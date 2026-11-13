---
tag: A6HCCXEZ9N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218063
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a sequence of polynomials $P_0\left(x\right)=x$ and $P_k\left(x\right)=P_{k-1}\left(x\right)^2-\left(-1\right)^kk$ for each $k\geq1$. Also define $Q_0\left(x\right)=x$ and $Q_k\left(x\right)=Q_{k-1}\left(x\right)^2+\left(-1\right)^kk$ for each $k\geq1$. Compute the product of the distinct real roots of $$P_1\left(x\right)Q_1\left(x\right)P_2\left(x\right)Q_2\left(x\right)\cdots P_{2018}\left(x\right)Q_{2018}\left(x\right).$$

*2018 CCA Math Bonanza Tiebreaker Round #2*
