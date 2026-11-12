---
tag: D0A6BSHWV7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 BMT Fall
    url: https://artofproblemsolving.com/community/c6h2753688
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2020
    source: hf-ai-mo-aops
    label: 2020 BMT Fall
---
Submit an integer between $1$ and $50$ , inclusive. You will receive a score as follows:
If some number is submitted exactly once: If $E$ is your number, $A$ is the closest number to $E$ which received exactly one submission, and $M$ is the largest unique submission, you will receive $\frac{25}{M} (A - |E - A|)$ points, rounded to the nearest integer.
If no number was submitted exactly once: If $E$ is your number, $K$ is the number of people who submitted $E$ , and $M$ is the number of people who submitted the most commonly submitted number, then you will receive $\frac{25(M-K)}{M}$ points, rounded to the nearest integer.
