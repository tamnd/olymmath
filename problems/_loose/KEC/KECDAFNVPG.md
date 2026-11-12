---
tag: KECDAFNVPG
kind: problem
type: answer
answer: "55252"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=57713
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose we have 1,000,000 bus tickets numbered from 000000 to 999999. We will call a ticket lucky if the sum of the first three digits of its number equals the sum of the last three digits. Let $ N $ be the number of lucky tickets. Prove the following equalities:

a) $\left(1+x+\ldots+x^{9}\right)^{3}\left(1+x^{-1}+\ldots+x^{-9}\right)^{3}=x^{27}+\ldots+a_{1} x+N+a_{1} x+\ldots+x^{-27}$;

b) $\left(1+x+\ldots+x^{9}\right)^{6}=1+\ldots+N x^{27}+\ldots+x^{54}$.

c) Find the number of lucky tickets.
