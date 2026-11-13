---
tag: MWBWSNMWA8
kind: problem
type: answer
answer: "501"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 51st Ukrainian National Mathematical Olympiad, 3rd Round
---
Sequence $(a_n)$ is defined as follows:
$$
a_1 = 1,\ a_2 = 2,\ a_{n+2} = (n+1)(a_n + a_{n+1})
$$
for each natural $n$. How many zeros does $a_{2011}$ end with?
