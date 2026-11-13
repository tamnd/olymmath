---
tag: DJ08EZVT00
kind: problem
type: answer
answer: a = 2023^3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=163
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
Does there exist an integer $a$ such that
$$
\frac{1}{\sqrt{2024}} < \frac{1}{\sqrt{a+1}} + \frac{1}{\sqrt{a+2}} + \dots + \frac{1}{\sqrt{a+2023}} < \frac{1}{\sqrt{2023}}?
$$
