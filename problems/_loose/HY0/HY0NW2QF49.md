---
tag: HY0NW2QF49
kind: problem
type: answer
answer: \alpha=1/(2^{2}-2+b^{2})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14932
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given natural numbers $a$ and $b$, such that $a < b < 2a$. On a grid plane, some cells are marked in such a way that in every grid rectangle $a \times b$ or $b \times a$ there is at least one marked cell. For what largest $\alpha$ can we assert that for any natural number $N$ there exists a grid square $N \times N$ in which at least $\alpha N^{2}$ cells are marked?

(I. Bogdanov, O. Podlipsky)
