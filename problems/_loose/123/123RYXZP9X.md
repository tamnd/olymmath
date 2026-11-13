---
tag: 123RYXZP9X
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108708
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
7$\cdot$70 Alice and Bob came to a hardware store, where colored tassels are sold to be tied on keys to distinguish different keys. Below is a segment of their conversation:
Alice: Are you going to buy some colored tassels to tie on your keys?
Bob: I would like to do that, but the tassels come in only 7 different colors, and I have 8 keys.
Alice: That's no problem, because even if two keys are tied with red tassels, you can still distinguish them by noticing whether they are adjacent to a key with a green tassel or a key with a blue tassel.
Bob: Of course, you know that all my keys are on the same keyring, and the keyring can be flipped and rotated, so when talking about "adjacent" or "three keys in front," one must be careful.
Alice: Even so, you don't need 8 different colors of tassels.
Try to determine: To distinguish $n$ keys on the same keyring, what is the minimum number of different colors of tassels needed?
