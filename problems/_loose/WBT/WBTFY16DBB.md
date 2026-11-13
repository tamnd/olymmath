---
tag: WBTFY16DBB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170643
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a finite sequence of letters as a word. With a word, we can perform the following operations:

a) Remove its first or last letter;

b) "Double" the word, i.e., write two instances of the word consecutively.

Can we reach the word $Z Y X \ldots D C B A$ from the word $A B C D \ldots X Y Z$ using such steps?
