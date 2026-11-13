---
tag: 8DPRVKJKQD
kind: problem
type: answer
answer: f(x)=xf(x)=-x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80380
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{Q} \rightarrow \mathbb{Q}$ satisfying $f(0)=0$ and

$$
\forall x, y \in \mathbb{Q}, f(f(x)+f(y))=x+y
$$
