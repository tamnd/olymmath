---
tag: 1M1B0GZFW6
kind: problem
type: answer
answer: Anja:11,Birgit:13,Carmen:14,Dorit:12,Elke:16
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=183747
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Five girls, all older than 10 years and having their birthday on the same day, but no two of the same age, are asked about their age on their birthday. Each girl answers truthfully:

(1) Anja: "I am 5 years younger than Elke."

(2) Birgit: "I am younger than Carmen, but older than Dorit."

(3) Carmen: "I am 14 years old."

(4) Dorit: "I am neither the youngest nor the oldest of the five of us."

(5) Elke: "Birgit and Carmen are both younger than I am."

Determine whether it is possible to uniquely determine the age of each of these girls from these statements! If this is the case, then give the age for each of the girls!
