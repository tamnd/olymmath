---
tag: 8YCWD2JTG2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215019
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$N$ cards are arranged in a circle, with exactly one card face up and the rest face-down. In a turn, choose a proper divisor $k$ of $N$. You may begin at any card on the circle and flip every $k$-th card, counting clockwise, if and only if every $k$-th card begins the turn in the same orientation (either all face-up or all face-down).

For example, with $15$ cards, you may start at any position and flip the $3$rd, $6$th, $9$th, $12$th, and $15$th cards around the circle if they all begin the turn face up (or all face-down).

For what values of $N$ can all of the cards be flipped face-up in a finite number of turns?
