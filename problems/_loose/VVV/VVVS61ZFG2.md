---
tag: VVVS61ZFG2
kind: problem
type: answer
answer: k_0 = 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229423
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ a_1,a_2, \cdots ,a_{2015} $ be $2015$-tuples of positive integers (not necessary distinct) and let $ k $ be a positive integers. Denote $ f(i)=a_i+\frac{a_1a_2 \cdots a_{2015}}{a_i} $.

a) Prove that if $ k=2015^{2015} $, there exist $ a_1, a_2, \cdots , a_{2015} $ such that $ f(i)= k $ for all $1\le i\le 2015 $.\\
b) Find the maximum $k_0$ so that for $k\le k_0$, there are no $k$ such that there are at least $ 2 $ different $2015$-tuples which fulfill the above condition.
