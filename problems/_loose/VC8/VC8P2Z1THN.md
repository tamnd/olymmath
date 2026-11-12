---
tag: VC8P2Z1THN
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12004
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the table, there are 10 stacks of playing cards (the number of cards in the stacks can be different, there should be no empty stacks). The total number of cards on the table is 2015. If a stack has an even number of cards, remove half of the cards. If the number of remaining cards in the stack is still even, remove half again, and so on, until the number of cards in the stack becomes odd. Do this for each stack. Explain:

a) What is the maximum possible number of cards remaining on the table?

b) What is the minimum possible number of cards remaining on the table?

In each case, provide an example of how the playing cards can be distributed among the stacks.
