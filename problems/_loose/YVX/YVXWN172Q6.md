---
tag: YVXWN172Q6
kind: problem
type: answer
answer: "17"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90427
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=52
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Four friends, One, Two, Five, and Ten are located on one side of the dark tunnel, and have only one flashlight. It takes one minute for person One to walk through the tunnel, two minutes for Two, five for Five, and ten for Ten. The tunnel is narrow and at most two people can walk at the same time with the flashlight. Whenever two people walk together they walk at the speed of the slower one. Show that all four friends can go from one side of the tunnel to the other one in 17 minutes.

Remark. Your explanation should be something like this: The friends $X$ and $Y$ first go through the tunnel using the flashlight, then $X$ returns with the flashlight to the other side,...
