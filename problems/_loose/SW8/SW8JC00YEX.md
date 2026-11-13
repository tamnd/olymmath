---
tag: SW8JC00YEX
kind: problem
type: answer
answer: n \neq 2a + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231867
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 3$ be a positive integer. In an election debate, we have $n$ seats arranged in a circle and these seats are numbered from $1$ to $n$, clockwise. In each of these chairs sits a politician, who can be a liar or an honest one. Lying politicians always tell lies, and honest politicians always tell the truth.

At one heated moment in the debate, they accused each other of being liars, with the politician in chair $1$ saying that the politician immediately to his left is a liar, the politician in chair $2$ saying that all the $2$ politicians immediately to his left are liars, the politician in the char $3$ saying that all the $3$ politicians immediately to his left are liars, and so on. Note that the politician in chair $n$ accuses all $n$ politicians (including himself) of being liars.

For what values of $n$ is this situation possible to happen?
