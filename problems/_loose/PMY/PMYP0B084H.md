---
tag: PMYP0B084H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech-Polish-Slovak_Mathematical_Match/train/0000.parquet#row=10
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove, that for every integer $k \ge 1$ there is a positive integer $n$ with following property: in decimal representation of $2^n$ one can find a block of exactly $k$ consecutive zeros, i.e.
$$
2^n = \dots a \overline{00\dots0} b\dots, \text{ $k$ zeros }
$$
where $a$, $b$ are nonzero digits.
