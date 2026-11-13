---
tag: CJZSK830AN
kind: problem
type: answer
answer: abcabacabcacbc
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will call a word consisting only of the letters "a", "b", "c" diverse if it does not contain two identical subwords in a row. (For example, the word "abcac" is diverse, while the word "abcbc" is not.) Does there exist a diverse word of 15 letters?
