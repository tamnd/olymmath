---
tag: YYK9RJCW6J
kind: problem
type: answer
answer: 2 \text{ white balls and } 1 \text{ black ball}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215767
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Vaggelis has a box that contains $2015$ white and $2015$ black balls. In every step, he follows the procedure below:
He choses randomly two balls from the box. If they are both blacks, he paints one white and he keeps it in the box, and throw the other one out of the box. If they are both white, he keeps one in the box and throws the other out. If they are one white and one black, he throws the white out, and keeps the black in the box.
He continues this procedure, until three balls remain in the box. He then looks inside and he sees that there are balls of both colors. How many white balls does he see then, and how many black?
