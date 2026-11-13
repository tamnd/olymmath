---
tag: 8K8FSZMDA2
kind: problem
type: answer
answer: f(n)=[\sqrt{4n+1}]-1\quad(\bmod4)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96905
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
22 Use a sequence to traverse all integer points on the complex plane: Let $a_{0}=0, a_{1}=1$, then proceed in a counterclockwise direction, one step at a time. Also, let $a_{n+1}-a_{n}=\mathrm{i}^{f(n)}$, where $\mathrm{i}$ is the imaginary unit. Find the simplest unified expression for $f(n)$.
