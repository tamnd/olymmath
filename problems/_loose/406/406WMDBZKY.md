---
tag: 406WMDBZKY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Rioplatense Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2973234
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27612
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228003
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2022
    source: hf-ai-mo-aops
    label: 2022 Rioplatense Mathematical Olympiad
---
On the table there are several cards. Each card has an integer number written on it.
Beto performs the following operation several times: he chooses two cards from the table, calculates the difference between the numbers written on them, writes the result on his notebook and removes those two cards from the table. He can perform this operation as many times as he wants, as long as there are at least two cards on the table.
After this, Beto multiplies all the numbers that he wrote on his notebook. Beto's goal is that the result of this multiplication is a multiple of $7^{100}$ .

a) Prove that if there are $207$ cards initially on the table then Beto can always achieve his goal, no matter what the numbers on the cards are.
b) If there are $128$ cards initially on the table, is it true that Beto can always achieve his goal?
