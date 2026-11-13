---
tag: QQYBBQG012
kind: problem
type: answer
answer: "909"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=183883
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Albrecht is supposed to determine a natural number between 1 and 1000000. Dirk, Evelyn, and Franziska each make exactly one true and one false statement (the order is not specified):

Dirk: (1) The number in question has fewer than three decimal places.

(2) If the number in question is decomposed into prime factors, exactly two different prime numbers appear in this decomposition, each (at least once, but) possibly also multiple times. Evelyn: (1) The number in question is divisible by 9.

(2) The number in question is not divisible by 27.

Franziska: (1) The number in question is 91809.

(2) The number in question is divisible by 101.

Show that the number in question can be uniquely determined in this way, and find this number!
