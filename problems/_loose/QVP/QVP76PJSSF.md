---
tag: QVP76PJSSF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Thailand Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3567522
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2960
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: th-tmo/2025
    source: hf-ai-mo-aops
    label: 2025 Thailand Mathematical Olympiad
---
In a class, there are $n \geqslant 3$ students and a teacher with $M$ marbles. The teacher then play a *Marble distribution* according to the following rules. At the start, the teacher distributed all her marbles to students, so that each student receives at least $1$ marbles from the teacher. Then, the teacher chooses a student , who has never been chosen before, such that the number of marbles that he owns in a multiple of $2(n-1)$ . That chosen student then equally distribute half of his marbles to $n-1$ other students. The same goes on until the teacher is not able to choose anymore student.

Find all integer $M$ , such that for some initial numbers of marbles that the students receive, the teacher can choose all the student(according to the rule above), so that each student receiving equal amount of marbles at the end.
