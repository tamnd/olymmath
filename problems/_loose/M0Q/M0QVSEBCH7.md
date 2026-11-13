---
tag: M0QVSEBCH7
kind: problem
type: answer
answer: p_{n}=\frac{4}{7}+\frac{3}{7}(-\frac{3}{4})^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117872
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The rules of the Chinese Men's Basketball First Division League stipulate: Each game, the winner gets 2 points, the loser gets 1 point (each game, even if it goes to overtime, must have a winner). A certain men's first division team is very strong, with a probability of winning each game being $\frac{3}{4}$, and a probability of losing being $\frac{1}{4}$. Find the probability that the team will score $\mathrm{n}$ points through several games in the middle of the season (assuming the total number of games the team plays in this season is $\mathrm{S}$, here $0<\mathrm{n} \leq \mathrm{S}$).
