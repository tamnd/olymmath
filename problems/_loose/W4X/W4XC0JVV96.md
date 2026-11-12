---
tag: W4XC0JVV96
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a line, there are a finite number of frogs sitting at different integer points. In one move, exactly one frog jumps 1 to the right, and they must still be at different points. We calculated the number of ways the frogs can make $n$ moves (for some initial arrangement of frogs). Prove that if we allowed the same frogs to jump to the left, prohibiting them from jumping to the right, the number of ways to make $n$ moves would be the same.
