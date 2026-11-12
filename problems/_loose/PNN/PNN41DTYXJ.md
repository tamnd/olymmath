---
tag: PNN41DTYXJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A word is defined as an arbitrary finite sequence of zeros and ones. The tripling of a word $A$ is its threefold repetition $A A A$. For example, if $A=101$, then its tripling is the word 101101101. Two operations are allowed on words:
1) insert the tripling of any word at any position (including at the beginning or end);
2) delete the tripling of any word.

For example, from the word 0001, one can obtain the words 0111001 and 1. Can the word 01 be obtained from the word 10 using such operations?
