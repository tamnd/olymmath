---
tag: SYEWTQS2ET
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84291
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a grid $n \times m$, Alice and Bob take turns placing dominoes $1 \times 2$ in the direction of their choice. The one who can no longer place dominoes loses. Which of the two has a winning strategy:

- If $n$ and $m$ are both even?
- If $n$ is even and $m$ is odd?

The most studied mathematical games often have two additional conditions:

- Moves always alternate between the two players
- Any terminal position is winning for the player who played the previous move

Among the previous games, the games of Chomp and Cram notably satisfied these properties (assuming that the square $(1,1)$ cannot be eaten in the game of Chomp), and any mathematical game can be reduced to this form.

In this more restricted context, we can particularly define positions of type $P$ and $N$.
