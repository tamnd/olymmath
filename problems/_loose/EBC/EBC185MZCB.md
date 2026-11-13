---
tag: EBC185MZCB
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=59
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 58th Ukrainian National Mathematical Olympiad
---
What is the maximum length of a sequence of positive integers $a_1, a_2, \dots, a_n$, if following conditions hold:
* $a_1 > 1$ is a prime number;
* for any $i: 2 \le i \le n$, $a_i \vdash a_1 a_2 \dots a_{i-1}$ holds;
* $a_n = 2^2 \cdot 3^3 \cdot 5^5 \cdot 7^7 \cdot 11^{11} \cdot 13^{13} \cdot 17^{17}$.
