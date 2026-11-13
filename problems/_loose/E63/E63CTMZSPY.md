---
tag: E63CTMZSPY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241369
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Bilbo, Gandalf, and Nitzan play the following game. First, Nitzan picks a whole number between $1$ and $2^{2022}$ inclusive and reveals it to Bilbo. Bilbo now compiles a string of length $4044$ built from the three letters $a,b,c$. Nitzan looks at the string, chooses one of the three letters $a,b,c$, and removes from the string all instances of the chosen letter. Only then is the string revealed to Gandalf. He must now guess the number Nitzan chose.

Can Bilbo and Gandalf work together and come up with a strategy beforehand that will always allow Gandalf to guess Nitzan's number correctly, no matter how he acts?
