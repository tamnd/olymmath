---
tag: WAF1HRFXDE
kind: problem
type: answer
answer: Minus signs on 51 through 100; plus signs on all other numbers.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=157
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Numbers $1, \dots, 200$ are written on a blackboard in one line. Juku has to write in front of each number plus or minus sign so that for any positive integer $n \le 100$ the number itself and one of its multiples have different signs. Which numbers must he assign a minus sign in order to get the maximal possible value of the expression?
