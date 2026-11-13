---
tag: SJJY0MXYXG
kind: problem
type: answer
answer: 'minimum: n−1; maximum: floor(n/2) * floor((n+1)/2)'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=295
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst
    source: hf-mathnet
    label: Romania 74th NMO Selection Tests for BMO and IMO
---
Fix an integer $n \ge 2$. Consider $n$ real numbers $a_1, a_2, \dots, a_n$, not all equal, and let
$$
d = d(a_1, a_2, \dots, a_n) = \max_{1 \le i < j \le n} |a_i - a_j|
$$
and
$$
s = s(a_1, a_2, \dots, a_n) = \sum_{1 \le i < j \le n} |a_i - a_j|.
$$

Determine, in terms of $n$, the smallest and the largest values the quotient $s/d$ may achieve.
