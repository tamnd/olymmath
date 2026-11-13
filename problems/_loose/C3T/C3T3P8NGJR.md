---
tag: C3T3P8NGJR
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184728
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a counting-out game, 11 children stand in a circle. One of these children recites the counting-out rhyme; with each syllable, one child is counted in a clockwise direction. The player who recites the counting-out rhyme is also included in the counting. The counting-out rhyme has 15 syllables. The child on whom the last syllable falls leaves the circle; the counting resumes with the next child, starting again from the beginning of the counting-out rhyme. This counting and elimination continues until only one player remains in the circle; this player is the winner.

a) At which child should the counting player start if he wants to win himself? (To formulate the answer, number the children and assign, for example, the counting player the number 1.)

b) If you have the opportunity to work on a (small) computer, you should write a program that solves task a) for counting-out games with $k$ children and a counting-out rhyme of $s$ syllables.
