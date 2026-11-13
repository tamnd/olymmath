---
tag: Q2GWFA12TH
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90875
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$p$ is a prime number such that the period of its decimal reciprocal is 200 . That is,

$$
\frac{1}{p}=0 . X X X X \ldots
$$

for some block of 200 digits $X$, but

$$
\frac{1}{p} \neq 0 . Y Y Y Y \ldots
$$

for all blocks $Y$ with less than 200 digits. Find the 101st digit, counting from the left, of $X$.
