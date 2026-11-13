---
tag: HS28CYBH6F
kind: problem
type: answer
answer: N_{n}=\frac{2^{n}+2(-1)^{n}}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83632
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The words of a language are defined as follows. "ab" and "bb" are the only words of length 2. For any $a \geqslant 3$, all words of length $n$ are obtained from a word of lesser length by replacing each occurrence of "b" with a word. Different occurrences may be replaced by different words. How many words of length $n$ are there?
