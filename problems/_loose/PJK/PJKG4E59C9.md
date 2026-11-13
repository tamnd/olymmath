---
tag: PJKG4E59C9
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=227
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Irish Mathematical Olympiad
---
The sequence $(a_n)$ is defined as follows: $a_0 = 1$, $a_1 = 1$, and
$$
a_{n+1} = 2(a_n - a_{n-1}),
$$
for all positive integers $n$. Determine, with proof, the remainder of $a_{2016}$ on division by $2017$.
