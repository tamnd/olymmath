---
tag: EDHTWP5DTZ
kind: problem
type: answer
answer: "67"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 60th Ukrainian National Mathematical Olympiad
---
For which greatest value of $n$, there exist integers $a_1, a_2, ..., a_n$ and $b_1, b_2, ..., b_n$ such that:
* all numbers $b_1, b_2, ..., b_n$ are different and lie in the range $[0; 99]$;
* $1 \le a_1 < a_2 < ... < a_n \le 100$;
* for all $i: 1 \le i \le n$, $b_i = a_i - i$ or $b_i = a_i - i + n$ holds?
