---
tag: 4WH42MMAEE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Over a set $M$ consisting of exactly 1987 people, it is assumed that each person in $M$ is acquainted with at most 5 other people in $M$.

Prove that from these assumptions it always follows:

There is a subset $U$ of $M$ consisting of at least 332 people with the property that no person in $U$ is acquainted with another person in $U$.

b) Give an example of a set $M$ consisting of exactly 1988 people for which the following statements are true:

Each person in $M$ is acquainted with exactly 5 people in $M$; every subset $U$ of $M$ with the property that no person in $U$ is acquainted with another person in $U$ consists of at most 333 people.

In these tasks, it will always be assumed that a person $X$ is acquainted with a person $Y$ if and only if $Y$ is acquainted with $X$.
