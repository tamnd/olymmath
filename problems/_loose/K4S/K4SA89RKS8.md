---
tag: K4SA89RKS8
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
    capture: hf-mathnet/Soviet_Union/train/0001.parquet#row=111
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Soviet Union 19th ASU
---
$x$ is a real number. Define $x_0 = 1 + \sqrt{1 + x}$, $x_1 = 2 + x / x_0$, $x_2 = 2 + x / x_1$, ..., $x_{1985} = 2 + x / x_{1984}$. Find all solutions to $x_{1985} = x$.
