---
tag: MR9A0CH41E
kind: problem
type: answer
answer: "2026"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216701
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On Binary Island, residents communicate using special paper. Each piece of paper is a $1 \times n$ row of initially uncolored squares. To send a message, each square on the paper must either be colored either red or green. Unfortunately the paper on the island has become damaged, and each sheet of paper has $10$ random consecutive squares each of which is randomly colored red or green.

Malmer and Weven would like to develop a scheme that allows them to send messages of length $2016$ between one another. They would like to be able to send any message of length $2016$, and they want their scheme to work with perfect accuracy. What is the smallest value of $n$ for which they can develop such a strategy?

*Note that when sending a message, one can see which 10 squares are colored and what colors they are. One also knows on which square the message begins, and on which square the message ends.*
