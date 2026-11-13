---
tag: 9RR2VS31AR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=183323
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Four students, one each from classes 5a, 5b, 6a, and 6b, are discussing the magazines they regularly read. The students are named Fred, Gerd, Hans, and Ingo. As it turns out, each of them reads exactly one of the two magazines "alpha" or "Frösi" regularly. Furthermore, the following statements are made:

(1) The student from class 5b does not read the magazine "alpha".

(2) Hans and, apart from him, the student from class 5a regularly read the magazine "alpha".

(3) Fred and, apart from him, the student from class 6b regularly read the magazine "Frösi". Gerd, on the other hand, does not.

(4) The student from class 6a, the student from class 5b, and, apart from these two, Gerd were invited to Ingo's birthday party.

The task is to find an assignment that describes which of the four students attends which class and which of the two magazines he regularly reads.

Investigate whether there is such an assignment that satisfies all statements (1), (2), (3), (4), and whether it is uniquely determined by these statements!

If this is the case, then provide this assignment!
