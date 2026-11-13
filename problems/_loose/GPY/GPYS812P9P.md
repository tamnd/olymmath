---
tag: GPYS812P9P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst
    source: hf-mathnet
    label: Romania THE 68th NMO SELECTION TESTS FOR THE BALKAN AND INTERNATIONAL MATHEMATICAL OLYMPIADS
---
Given an integer $n \ge 2$, determine the maximum value the sum
$$
a_1/a_2 + a_2/a_3 + \dots + a_{n-1}/a_n
$$
may achieve, and the points at which the maximum is achieved, as $a_1, \dots, a_n$ run over all of positive real numbers subject to
$$
a_k \ge a_1 + \dots + a_{k-1}, k = 2, \dots, n.
$$
