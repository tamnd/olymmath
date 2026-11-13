---
tag: 3HBCKQT2JD
kind: problem
type: answer
answer: "55055"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 59th Ukrainian National Mathematical Olympiad
---
Find the average of all 5-digit numbers that satisfy the following:
* The number is of the form $\overline{ab0cd}$, that is, its third digit is zero;
* Digits are pairwise distinct;
* Both numbers $\overline{ab0cd}$, and $\overline{dc0ba}$ are divisible by 7.
