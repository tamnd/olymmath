---
tag: DMM8TGRC6K
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=19857
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In modern conditions, digitalization - the conversion of all information into digital code - is considered relevant. Each letter of the alphabet can be assigned a non-negative integer, called the code of the letter. Then, the weight of a word can be defined as the sum of the codes of all the letters in that word. Is it possible to encode the letters Е, О, С, Т, Ш, Ь with elementary codes, each consisting of a single digit from 0 to 9, so that the weight of the word "СТО" is not less than the weight of the word "ШЕСТЬСОТ"? If such encoding is possible, in how many ways can it be implemented? If such encoding is possible, does it allow for the unambiguous restoration of a word from its code?
