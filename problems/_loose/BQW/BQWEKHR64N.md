---
tag: BQWEKHR64N
kind: problem
type: answer
answer: "20"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At the end of a football league with 20 teams (where each team plays against every other team exactly two matches), the Mathematicians won 19 matches, drew 12, and lost 7. The coach observes that $19=12+7$. For a generic team in the league, we denote with $(v, n, p)$ the triplet formed by the number of wins, draws, and losses respectively, achieved in the league. For how many distinct triplets can it happen that $v=n+p$? (Note: The triplets are ordered, so, for example, $(19,12,7)$ and $(19,7,12)$ are to be considered distinct). (A) 19, (B) 20, (C) 38, (D) 40, (E) none of the above.
