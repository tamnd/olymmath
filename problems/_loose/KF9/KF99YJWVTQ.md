---
tag: KF99YJWVTQ
kind: problem
type: answer
answer: 6 \cdot 4^{n-3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236795
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a bookcase there are $ n \geq 3$ books side by side by different authors. A librarian considers the first and second book from left and exchanges them iff they are not alphabetically sorted. Then he is doing the same operation with the second and third book from left etc. Using this procedure he iterates through the bookcase three times from left to right. Considering all possible initial book configurations how many of them will then be alphabetically sorted?
