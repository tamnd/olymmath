---
tag: YY9HG1BCC6
kind: problem
type: answer
answer: \frac{n - 1}{2^n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213090
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The point $P$ on a real number line is moved according to the rule as follows.
Flip a coin, if heads is the spot on the face, then $P$ is moved by $+1$, and if tails is the spot on the face, then $P$ is moved to the point of reflection for the origin. At first $P$ is set on the origin on the real number, let $a_n$ be the coordinate of $P$ after $n$ tossing the coin.

(1) What's the probability such that $a_3=0?$

(2) What's the probability such that $a_4=1?$

(3) Express the probability such that $a_n=n-3$ for $n\geq 3$ in terms of $n$.
