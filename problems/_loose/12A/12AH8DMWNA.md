---
tag: 12AH8DMWNA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Dutch Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3285258
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49016
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85788
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nl-nwo/2023
    source: hf-ai-mo-aops
    label: 2023 Dutch Mathematical Olympiad
---
A maths teacher has $10$ cards with the numbers $1$ to $10$ on them, one number per card. She places these cards in some order in a line next to each other on the table. The students come to the table, one at a time. The student whose turn it is goes once through the line of cards from left to right and removes every card she encounters that is (at that moment) the lowest card on the table. This continues till all cards are removed from the table. For example, if the line is in order $3$ , $1$ , $4$ , $5$ , $8,$ $6$ , $9$ , $10$ , $2$ , $7$ from left to right, the first student takes cards $1$ and $2$ . Then the second student comes who, in our example, takes the cards $3$ , $4$ , $5$ , $6$ , and $7$ . The third student then takes the cards $8$ , $9$ , and $10$ .
Let $A$ be the number of sequences of cards that the teacher can choose so that exactly nine students get a turn to pick cards. Let $B$ be the number of sequences of cards that the teacher can choose so that exactly two students get a turn to pick cards. Prove that $A = B$ .
