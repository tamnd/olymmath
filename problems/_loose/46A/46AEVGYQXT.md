---
tag: 46AEVGYQXT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263914
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A teacher plays the game "Duck-Goose-Goose" with his class. The game is played as follows: All the students stand in a circle and the teacher walks around the circle. As he passes each student, he taps the student on the head and declares her a 'duck' or a 'goose'. Any student named a 'goose' leaves the circle immediately. Starting with the first student, the teacher tags students in the pattern: duck, goose, goose, duck, goose, goose, etc., and continues around the circle (re-tagging some former ducks as geese) until only one student remains. This remaining student is the winner.

For instance, if there are 8 students, the game proceeds as follows: student 1 (duck), student 2 (goose), student 3 (goose), student 4 (duck), student 5 (goose), student 6 (goose), student 7 (duck), student 8 (goose), student 1 (goose), student 4 (duck), student 7 (goose) and student 4 is the winner. Find, with proof, all values of $n$ with $n>2$ such that if the circle starts with $n$ students, then the $n$th student is the winner.
