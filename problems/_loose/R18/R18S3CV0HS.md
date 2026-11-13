---
tag: R18S3CV0HS
kind: problem
type: answer
answer: "322"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=364
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland IRL_ABooklet
---
There are 28 towns on the island of Mathematia. Each pair of towns is either connected by a single road, or is not connected. It turns out that for any two towns $A$ and $B$ that have the same number of roads connected to them, there is no road that connects $A$ to $B$. Determine, with proof, the maximum number of roads on the island of Mathematia.
