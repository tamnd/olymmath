---
tag: 5MQ61JZ7FN
kind: problem
type: answer
answer: "127"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268670
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
You are playing a game called "Hovse."
Initially you have the number $0$ on a blackboard.
If at any moment the number $x$ is written on the board, you can either:
$\bullet$ replace $x$ with $3x + 1$
$\bullet$ replace $x$ with $9x + 1$
$\bullet$ replace $x$ with $27x + 3$
$\bullet$ or replace $x$ with $\left \lfloor \frac{x}{3} \right \rfloor $.
However, you are not allowed to write a number greater than $2017$ on the board. How many positive numbers can you make with the game of "Hovse?"
