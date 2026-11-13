---
tag: RZSR7F7NH2
kind: problem
type: answer
answer: Bob wins
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=205
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus Belarusian Mathematical Olympiad
---
Ann and Bob play the following game. They, in turn (Ann starts), replace one of the asterisks in the expression $\overline{*****}$ by one of the digits from $0$ to $9$ (each digit can be used exactly one time). Ann wins if the obtained $5$-digit number is divisible by $11$, otherwise Bob wins.
Who of the players wins if both of them play to win?
