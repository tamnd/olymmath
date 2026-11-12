---
tag: CCC53V2FRT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55372
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alexei thought of a two-digit number (from 10 to 99). Grisha tries to guess it by naming two-digit numbers. If Grisha correctly names the number, or if he names one digit correctly and the other is off by no more than one, Alexei responds with "warm"; in all other cases, Alexei responds with "cold". (For example, if the number 65 is thought of, Grisha will hear "warm" if he names 65, 64, 66, 55, or 75, and "cold" in all other cases.)

a) Show that there is no way for Grisha to guarantee that he will find out the number using 18 attempts.

b) Come up with a way for Grisha to guarantee that he will find out the number using 24 attempts (regardless of which number Alexei thinks of).

c) Can it be done in 22 attempts?
