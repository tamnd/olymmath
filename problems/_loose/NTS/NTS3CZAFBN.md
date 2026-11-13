---
tag: NTS3CZAFBN
kind: problem
type: answer
answer: "100"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a table there are $100$ red and $k$ white buckets for which all of them are initially empty. In each move, a red and a white bucket is selected and an equal amount of water is added to both of them. After some number of moves, there is no empty bucket and for every pair of buckets that are selected together at least once during the moves, the amount of water in these buckets is the same. Find all the possible values of $k$.
