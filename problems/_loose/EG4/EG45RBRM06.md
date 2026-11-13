---
tag: EG45RBRM06
kind: problem
type: answer
answer: b=0or(niseven=-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179065
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the functions $f: \mathbb{R} \rightarrow \mathbb{R}$ of the form $f(x)=a x+b$, with $a, b \in \mathbb{R}$, such that

$$
(f \circ f \circ \ldots \circ f)(-x)+(f \circ f \circ \ldots \circ f)(x)=0
$$

for any $x \in \mathbb{R}$ (the function $f$ is composed with itself $n$ times in both terms).

Mathematical Gazette 1981
