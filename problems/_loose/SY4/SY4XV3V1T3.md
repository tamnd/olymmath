---
tag: SY4XV3V1T3
kind: problem
type: answer
answer: "64"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15327
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Vasya thought of a natural number $n \leq 2020$. Petya tries to guess it as follows: he names some natural number x and asks if his number is greater (is it true that $\mathrm{x}<\mathrm{n}$?), and Vasya answers him with "yes" or "no". Petya wins if he finds out the number, and loses if after receiving a "no" answer for the second time, he cannot name the guessed number. What is the smallest number of questions Petya needs to win?
