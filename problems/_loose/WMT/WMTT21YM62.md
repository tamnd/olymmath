---
tag: WMTT21YM62
kind: problem
type: answer
answer: \lceil\log_2n\rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148675
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
You have to organize a fair procedure to randomly select someone from $ n$ people so that every one of them would be chosen with the probability $ \frac{1}{n}$. You are allowed to choose two real numbers $ 0<p_1<1$ and $ 0<p_2<1$ and order two coins which satisfy the following requirement: the probability of tossing "heads" on the first coin $ p_1$ and the probability of tossing "heads" on the second coin is $ p_2$. Before starting the procedure, you are supposed to announce an upper bound on the total number of times that the two coins are going to be flipped altogether. Describe a procedure that achieves this goal under the given conditions.
