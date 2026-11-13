---
tag: 6NP2VC0T0K
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148868
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $r>1$ be a rational number. Alice plays a solitaire game on a number line. Initially there is a red bead at $0$ and a blue bead at $1$. In a move, Alice chooses one of the beads and an integer $k \in \mathbb{Z}$. If the chosen bead is at $x$, and the other bead is at $y$, then the bead at $x$ is moved to the point $x'$ satisfying $x'-y=r^k(x-y)$.

Find all $r$ for which Alice can move the red bead to $1$ in at most $2021$ moves.
