---
tag: 5G95PF8YBF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246868
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any natural number $ n\ge 2, $ define $ m(n) $ to be the minimum number of elements of a set $ S $ that simultaneously satisfy:
$ \text{(i)} \{ 1,n\} \subset S\subset \{ 1,2,\ldots ,n\} $
$ \text{(ii)} $ any element of $ S, $ distinct from $ 1, $ is equal to the sum of two (not necessarily distinct) elements from $ S. $

**a)** Prove that $ m(n)\ge 1+\left\lfloor \log_2 n \right\rfloor , \forall n\in\mathbb{N}_{\ge 2} . $
**b)** Prove that there are infinitely many natural numbers $ n\ge 2 $ such that $ m(n)=m(n+1). $

$ \lfloor\rfloor $ denotes the usual integer part.
