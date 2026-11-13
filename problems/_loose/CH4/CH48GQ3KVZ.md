---
tag: CH48GQ3KVZ
kind: problem
type: answer
answer: "Yes"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=147
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Ireland
---
Let $N_1 = 12$. The goal in this problem is to obtain the number $N_k = 21$ after performing a finite number of steps according to the following rules. In each step, the numbers $N_i$ and $N_{i+1}$ need to be in *Shamrock Relation*. Two numbers are said to be in *Shamrock Relation* if and only if
(a) one number is obtained from the other by replacing any block $X$ of consecutive digits by its triple repetition $XXX$; or
(b) one number is obtained from the other by replacing any connected block of the form $XXY$ with $YYY$, where $X$ and $Y$ represent blocks of consecutive digits.
Is the goal of obtaining 21 achievable?
