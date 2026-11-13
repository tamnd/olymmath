---
tag: JRK6R10FYR
kind: problem
type: answer
answer: "793"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267435
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ be the number of functions $f: \mathbb{Z}/16\mathbb{Z} \to \mathbb{Z}/16\mathbb{Z}$ such that for all $a,b \in \mathbb{Z}/16\mathbb{Z}$: $$f(a)^2+f(b)^2+f(a+b)^2 \equiv 1+2f(a)f(b)f(a+b) \pmod{16}.$$ Find the remainder when $N$ is divided by 2017.

*Proposed by Zack Chroman*
