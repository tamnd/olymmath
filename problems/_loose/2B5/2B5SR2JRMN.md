---
tag: 2B5SR2JRMN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=821
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1976
    source: hf-numinamath-1-5
    label: XXVII OM - I - Problem 11
---
Transmitting and receiving stations are sequentially connected: $ S_0 $ with $ S_1 $, $ S_1 $ with $ S_2 $, ..., $ S_n $ with $ S_{n+1} $, ... Station $ S_0 $ transmits a signal of 1 or -1, station $ S_1 $ receives the same signal with probability $ 1 - \varepsilon $, and the opposite signal with probability $ \varepsilon $. Station $ S_1 $ transmits the received signal to station $ S_2 $ under the same rules, then station $ S_2 $ transmits the received signal to station $ S_3 $, and so on. Let $ p^n(i|j) $ denote the probability that station $ S_n $ receives the signal $ i $ given that station $ S_0 $ transmitted the signal $ j $. Calculate $ \lim_{n\to \infty} p^n(i|j) $.
