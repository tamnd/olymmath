---
tag: Y9AR73XBT2
kind: problem
type: answer
answer: Bob
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=207
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2013
    source: hf-mathnet
    label: Belarus BelarusMO 2013_s
---
The odd number of the asterisks are written on the blackboard: $\underbrace{**\dots*}_{2n+1}$.
Ann and Bob play the following game. They, in turn (Ann starts), replace one of the asterisks in the expression $\underbrace{**\dots*}_{2n+1}$ by any of the digits from $0$ to $9$ (the first left asterisk cannot be replaced by $0$). Ann wins if the obtained number is divisible by $11$, otherwise Bob wins.
Who of the players wins if both of them play to win?
