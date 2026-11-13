---
tag: C625TVEB2Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250269
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Ivan and Kolya play a game, Ivan starts. Initially, the polynomial $x-1$ is written of the blackboard. On one move, the player deletes the current polynomial $f(x)$ and replaces it with $ax^{n+1}-f(-x)-2$, where $\deg(f)=n$ and $a$ is a real root of $f$. The player who writes a polynomial which does not have real roots loses. Can Ivan beat Kolya?
