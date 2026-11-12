---
tag: TCHFMJYF06
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14531
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each of 100 schoolchildren has a stack of 101 cards numbered from 0 to 100. The first schoolchild shuffles the stack, then takes one card from the top of the resulting stack, and each time a card is taken (including the first time), writes on the board the arithmetic mean of the numbers on all the cards taken by him at that moment. Thus, he writes down 100 numbers, and when only one card is left in the stack, he returns the cards to the stack, and the next schoolchild, starting with shuffling the stack, does the same, then the third, and so on. Prove that among the 10000 numbers written on the board, there will be two identical numbers.

(A. Grybalko)
