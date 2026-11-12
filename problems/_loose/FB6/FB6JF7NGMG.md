---
tag: FB6JF7NGMG
kind: problem
type: answer
answer: "8.48547"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=726
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1980
    source: hf-numinamath-1-5
    label: XXXI - II - Task 5
---
We write down the terms of the sequence $ (n_1, n_2, \ldots, n_k) $, where $ n_1 = 1000 $, and $ n_j $ for $ j > 1 $ is an integer chosen randomly from the interval $ [0, n_{j-1} - 1] $ (each number in this interval is equally likely to be chosen). We stop writing when the chosen number is zero, i.e., $ n_{k-1} $, $ n_k = 0 $. The length $ k $ of the sequence $ (n_1, n_2, \ldots, n_k) $ is a random variable. Prove that the expected value of this random variable is greater than 7.
