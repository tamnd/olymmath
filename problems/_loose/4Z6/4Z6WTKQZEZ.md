---
tag: 4Z6WTKQZEZ
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185991
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a football tournament, $n$ teams participated. Each team played against every other team exactly once.

The winning team received 2 points, the losing team received no points, and in the event of a draw, both teams received one point each.

After the tournament, the teams were ranked 1, 2, .., n in the final table according to their total points in descending order. (In the event of a tie, additional criteria were used to distinguish between teams.)

Determine the largest possible number that can occur as the point difference between two directly adjacent teams in the final table in all (under these rules) possible tournaments.
