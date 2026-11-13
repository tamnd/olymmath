---
tag: MX35NHKD2V
kind: problem
type: answer
answer: \left\lfloor \frac{3n}{2} \right\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204623
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 2$ be a positive integer. A total of $2n$ balls are coloured with $n$ colours so that there are two balls of each colour. These balls are put inside $n$ cylindrical boxes with two balls in each box, one on top of the other. Phoe Wa Lone has an empty cylindrical box and his goal is to sort the balls so that balls of the same colour are grouped together in each box. In a *move*, Phoe Wa Lone can do one of the following:

- Select a box containing exactly two balls and reverse the order of the top and the bottom balls.

- Take a ball $b$ at the top of a non-empty box and either put it in an empty box, or put it in the box only containing the ball of the same colour as $b$.

Find the smallest positive integer $N$ such that for any initial placement of the balls, Phoe Wa Lone can always achieve his goal using at most $N$ moves in total.
