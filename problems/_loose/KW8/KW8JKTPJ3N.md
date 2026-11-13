---
tag: KW8JKTPJ3N
kind: problem
type: answer
answer: Minimum S = 624/25. Maximum T = 13^24 * 12^26.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=422
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1 \le a_2 \le \dots \le a_{50}$ be real numbers such that
(i) $a_1 + a_2 + \dots + a_{50} = 0,$
(ii) $|a_1| + |a_2| + \dots + |a_{50}| = 624.$
Find the minimum value for $S = a_{50} - a_1$ and maximum value of $T = a_1a_2 \dots a_{50}$.
