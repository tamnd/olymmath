---
tag: RARAYV5ZCH
kind: problem
type: answer
answer: 1/4^{2015}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: za-samo
    source: hf-mathnet
    label: South Africa South African Mathematics Olympiad Third Round
---
Two sequences of real numbers are defined as follows:
$$
u_1 = 0, u_{n+1} = \frac{1}{2}(u_n + v_n)$$
$$v_1 = 1, v_{n+1} = \frac{1}{4}(u_n + 3v_n)$$
Find the value of $v_{2016} - u_{2016}$.
