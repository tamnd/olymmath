---
tag: VMJFY2PPTA
kind: problem
type: answer
answer: '[-1,1]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Show that for any $a \geq 0$, the following inequality holds:

$$
\|x-a\|+\|x+a\| \geq 2a \forall x \in \mathbb{R}
$$

b) Show that for any $n \in \mathbb{N}$, the following inequality holds:

$\|x-n\|+\|x-n+1\|+\cdots+\|x-1\|+\|x+1\|+\cdots+\|x+n-1\|+\|x+n\| \geq n(n+1) \forall x \in \mathbb{R}$.

c) Determine the real values of $x$ for which equality holds in the inequality from part b).
