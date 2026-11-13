---
tag: 82QAGESNE2
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=41
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine UkraineMO
---
Determine all positive integers $n$ such that number $N$ is also integer, where
$$
N = \frac{2 \cdot 1}{\sqrt{1^2 + 1 + 4 + \sqrt{1^2 - 1 + 4}}} + \frac{2 \cdot 2}{\sqrt{2^2 + 2 + 4 + \sqrt{2^2 - 2 + 4}}} + \dots + \frac{2n}{\sqrt{n^2 + n + 4 + \sqrt{n^2 - n + 4}}}
$$
(Anikushyn A., Rublyov B.)
