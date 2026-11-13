---
tag: J5YV9WBBYJ
kind: problem
type: answer
answer: "4022"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=151291
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4097
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2011
    source: hf-numina-olympiads
    label: HMMT February
---
The integers from 1 to $n$ are written in increasing order from left to right on a blackboard. David and Goliath play the following game: starting with David, the two players alternate erasing any two consecutive numbers and replacing them with their sum or product. Play continues until only one number on the board remains. If it is odd, David wins, but if it is even, Goliath wins. Find the 2011th smallest positive integer greater than 1 for which David can guarantee victory.
