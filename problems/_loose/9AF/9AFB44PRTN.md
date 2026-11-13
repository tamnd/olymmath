---
tag: 9AFB44PRTN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230127
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the beginning, there are $100$ cards on the table, and each card has a positive integer written on it. An odd number is written on exactly $43$ cards. Every minute, the following operation is performed: for all possible sets of $3$ cards on the table, the product of the numbers on these three cards is calculated, all the obtained results are summed, and this sum is written on a new card and placed on the table. A day later, it turns out that there is a card on the table, the number written on this card is divisible by $2^{2018}.$ Prove that one hour after the start of the process, there was a card on the table that the number written on that card is divisible by $2^{2018}.$
