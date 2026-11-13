---
tag: HPR019JFFS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161443
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a large table, there are chocolates numbered from 1 to 2017, arranged in order by those numbers. Masha and Medved are playing the following game. Masha plays first, and they take turns, with the game ending after 63 moves. In the $k$-th move, the player whose turn it is eats $k$ consecutive chocolates from the table. (Thus, Masha eats 1 chocolate first, then Medved eats 2 consecutive chocolates, then Masha eats 3, and so on, until in the 63rd move Masha eats 63 consecutive chocolates, after which only one chocolate remains.) Masha wins if the last remaining chocolate has an odd number, and Medved wins if that number is even. Who has the winning strategy? (Note: consecutive chocolates do not necessarily have to be numbered by consecutive natural numbers; chocolates $i$ and $j$ for $i<j-1$ are considered consecutive if all chocolates numbered between $i$ and $j$ have already been eaten.)
