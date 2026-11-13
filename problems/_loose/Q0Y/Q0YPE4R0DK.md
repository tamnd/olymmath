---
tag: Q0YPE4R0DK
kind: problem
type: answer
answer: \frac{74}{99}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185814
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
50 white and 50 black balls are to be distributed into two indistinguishable urns in such a way that neither urn remains empty and all balls are used.

How should the balls be distributed between the two urns so that the probability of drawing a white ball when one of the two urns is chosen at random and a ball is drawn from it is as high as possible?

\section*{Hints:}

1. In classical probability theory, the probability $p$ of an event is defined as the quotient of the number $g$ of favorable cases for this event and the total number $m$ of possible cases, i.e., $p=\frac{g}{m}$.

2. Therefore, the probability of drawing a white ball (blindly) from an urn that contains a total of $u$ balls, of which $w$ are white, is set to $p=\frac{w}{u}$.

3. If there are two urns, with the probability of drawing a white ball being $p_{1}$ and $p_{2}$ respectively, then the probability of the combined event "selecting one of the two urns and drawing a white ball from the selected urn" is $p=\frac{1}{2} p_{1}+\frac{1}{2} p_{2}$.
