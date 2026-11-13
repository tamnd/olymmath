---
tag: 3VZ0AEP6K4
kind: problem
type: answer
answer: 0, 1, 2, ..., 98
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=242
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
One hundred people attended the party, some of whom were previously acquainted. All acquaintances were mutual and no new were made during the party.
A gong rang $100$ times during the party. After the first sounding of the gong, all the people not acquainted with anyone left the party. After the second sounding of the gong, all the people with exactly one acquaintance (among the remaining people) left. It continued all the way, meaning that after the $k$th sounding of the gong, all the people acquainted with exactly $k-1$ remaining people left the party ($k = 1, \dots, 100$).
At the end of the party, there were $n$ people still present. Find all possible values of $n$.
