---
tag: 817QTK5QRG
kind: problem
type: answer
answer: \frac{17}{32}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211030
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Palmer and James work at a dice factory, placing dots on dice. Palmer builds his dice correctly, placing the dots so that $1$, $2$, $3$, $4$, $5$, and $6$ dots are on separate faces. In a fit of mischief, James places his $21$ dots on a die in a peculiar order, putting some nonnegative integer number of dots on each face, but not necessarily in the correct configuration. Regardless of the configuration of dots, both dice are unweighted and have equal probability of showing each face after being rolled.

Then Palmer and James play a game. Palmer rolls one of his normal dice and James rolls his peculiar die. If they tie, they roll again. Otherwise the person with the larger roll is the winner. What is the maximum probability that James wins? Give one example of a peculiar die that attains this maximum probability.
