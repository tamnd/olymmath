---
tag: 5RV3W2NJYF
kind: problem
type: answer
answer: f(n) = n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209048
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb N \cup \{0\} \to \mathbb N\cup \{0\}$ such that $f(1)>0$ and
$$f(m^2+3n^2)=(f(m))^2 + 3(f(n))^2 \forall m,n \in \mathbb N\cup \{0\}.$$
