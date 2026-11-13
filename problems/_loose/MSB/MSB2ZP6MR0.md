---
tag: MSB2ZP6MR0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267899
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a club, there are $n$ members, and they are deciding some sport training sessions, satisfying all of these requirements:
*i)* Each member attends in all training sessions;
*ii)* At each training sessions, the club are divided into $3$ groups: swimming group, cycling group, running group (each member joins exactly $1$ group and each group consists of at least $1$ person);
*iii)* For any $2$ members of the club, we can find at least $1$ session such that there are $2$ people that are not in the same group.

a) Assume that $n=9$. We know that the club has ran $1$ training session and it will run $1$ more session.
How many ways to divide the group for the second training session?
b) Assume that $n=2022$. Find the minimum number of training sessions that the club have to run?
